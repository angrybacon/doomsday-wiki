import { writeFileSync } from 'fs';
import type { Entry } from './models';
import { read } from './read';

const [_binary, _script, ...paths] = process.argv;

const database = paths.reduce<Entry[]>((accumulator, path) => {
  if (path) {
    const entry = read(path);
    accumulator.push(...entry);
  }
  return accumulator;
}, []);

console.info(`Writing ${database.length} entries...`);

const json = process.env.GUFF_DEBUG
  ? JSON.stringify(database, null, 2)
  : JSON.stringify(database);
writeFileSync('guff.json', json, 'utf8');

console.info(`Write successful!`);
