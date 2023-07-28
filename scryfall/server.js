const http = require('node:http');
const { RateLimit } = require('async-sema');

const CACHE = new Map();

const API = 'https://api.scryfall.com';

// NOTE See https://scryfall.com/docs/api for more details on the rate limit
const limit = RateLimit(9);

const handler = async (request, response) => {
  if (!CACHE.has(request.url)) {
    await limit();
    const promise = fetch(`${API}${request.url}`).then(async (it) => {
      if (!it.ok) {
        const error = await it.text();
        console.error(`Error while requesting '${request.url}'`, error);
        throw it.statusText;
      }
      return it.text();
    });
    CACHE.set(request.url, promise);
    if (process.env.SCRYFALL_DEBUG) {
      console.info(`Cached request for "${request.url}"`);
    }
  }
  try {
    const data = await CACHE.get(request.url);
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.write(data);
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    // TODO Retrieve error details from API response
    response.write(`Error while reading "${request.url}" (${error})`);
  } finally {
    response.end();
    if (process.env.SCRYFALL_DEBUG) {
      console.count(`GET ${request.url}`);
    }
  }
};

const HOST = 'localhost';
const PORT = '3333';

http
  .createServer(handler)
  .listen(PORT, HOST, () =>
    console.info(`Cache server is running on http://${HOST}:${PORT}`),
  );
