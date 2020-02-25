const parse = text => (
  text
    .split(/\n\s*\n/)
    .map(it => it.match(/\d+[^\n]+/g))
    .filter(it => it)
    .map(it => it.map(it => {
      const [ , amount, name ] = it.match(/(\d+) +(.+)/);
      return [amount, name];
    }))
);


module.exports.parse = text => {
  const [ main = '', side = '' ] = text.split(/(?:\/\/ *)?sideboard/i);
  return {
    main: parse(main),
    side: parse(side),
  };
};
