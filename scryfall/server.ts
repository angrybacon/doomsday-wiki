import { createServer } from 'node:http';
import { RateLimit } from 'async-sema';

/* eslint no-console: ["error", { allow: ["count", "error", "info"] }] */

const API = 'https://api.scryfall.com';
const CACHE = new Map();
const HOST = 'localhost';
const PORT = 3333;

// NOTE See https://scryfall.com/docs/api for more details on the rate limit
const limit = RateLimit(9);

createServer(async (request, response) => {
  if (!CACHE.has(request.url)) {
    await limit();
    const promise = fetch(`${API}${request.url}`).then(async (it) => {
      if (it.ok) return it.text();
      const error = await it.text();
      console.error(`Error while fetching '${request.url}'`, error);
      throw it.statusText;
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
    const message = `Error "${error}" while fetching "${request.url}"`;
    response.write(message);
  } finally {
    response.end();
    if (process.env.DEBUG === '1') console.count(`GET ${request.url}`);
  }
}).listen(PORT, HOST, () => console.info(`Running on http://${HOST}:${PORT}`));
