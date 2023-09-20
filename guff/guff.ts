import { walk } from './walk';

const guff = (path: string) => {
  const files = walk(path);
  console.log(path, files);
};

const [_binary, _script, ...paths] = process.argv;
paths.map((path) => path && guff(path));
