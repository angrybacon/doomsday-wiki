import { createServer } from 'node:http';
import { RateLimit } from 'async-sema';

/* eslint no-console: ["error", { allow: ["count", "error", "info"] }] */

const API = 'https://api.scryfall.com';
const CACHE = new Map();
const HOST = 'localhost';
const PORT = 3333;

// NOTE Most endpoints we care about are now severely rate-limited.
//      Let's revisit bulk data soon :tm:
//      See <https://scryfall.com/docs/api/rate-limits>
const limit = RateLimit(2, { uniformDistribution: true });

createServer(async (request, response) => {
  if (!request.url) return;
  if (!CACHE.has(request.url)) {
    await limit();
    const promise = fetch(`${API}${request.url}`).then(async (it) => {
      if (it.ok) return it.text();
      const error = await it.text();
      console.error(`Error while fetching "${request.url}"`, error);
      throw new Error(it.statusText);
    });
    CACHE.set(request.url, promise);
    if (process.env.DEBUG === '1') console.info(`Caching for "${request.url}"`);
  }
  try {
    const data = await CACHE.get(request.url);
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.write(data);
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    // TODO Retrieve error details from API response
    const message = error instanceof Error ? error.message : String(error);
    response.write(`Error "${message}" while fetching "${request.url}"`);
  } finally {
    response.end();
    if (process.env.DEBUG === '1') console.count(`GET ${request.url}`);
  }
}).listen(PORT, HOST, () => console.info(`Running on http://${HOST}:${PORT}`));
