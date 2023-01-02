const http = require('node:http');

const CACHE = new Map();

const API = 'https://api.scryfall.com';

const handler = async (request, response) => {
  if (!CACHE.has(request.url)) {
    const promise = fetch(`${API}${request.url}`).then(async (it) => {
      if (!it.ok) {
        const error = await it.text();
        console.error(`Error while requesting '${request.url}'`, error);
        throw new Error(it.statusText);
      }
      return it.text();
    });
    CACHE.set(request.url, promise);
  }
  try {
    const data = await CACHE.get(request.url);
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.write(data);
  } catch {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    // TODO Retrieve error details from API response
    response.write(`Cache error while requesting ${request.url}`);
  } finally {
    response.end();
  }
};

const HOST = 'localhost';
const PORT = '3333';

const server = http.createServer(handler);
server.listen(PORT, HOST, () =>
  console.info(`Cache server is running on http://${HOST}:${PORT}`)
);
