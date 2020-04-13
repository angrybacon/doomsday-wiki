const MANA_RE = /{(20|1?[0-9]|[WUBRGCS]|[XYZ]|[WUBRG2P]\/[WUBRG2P]|tap|[+-][1-9]*[0-9])}/gi;


const reactify = (query, match) => {
  let loyalty = undefined;
  let prefix = undefined;
  let symbol = undefined;
  let [ a, b ] = match.split('/');
  if (a.startsWith('+') || a.startsWith('-')) {
    loyalty = a.slice(1);
    prefix = a.slice(0, 1);
    symbol = loyalty === '0' ? 'loyalty-zero' : {'+': 'loyalty-up', '-': 'loyalty-down'}[prefix];
  }
  else {
    symbol = [a, b].join('').toLowerCase();
  }
  const attributes = (
    Object.entries({symbol, ...(loyalty !== undefined && {loyalty})})
      .map(([ key, value ]) => `${key}="${value}"`)
      .join(' ')
  );
  return `<mana ${attributes} />`;
};


module.exports.replace = text => text.replace(MANA_RE, reactify);
