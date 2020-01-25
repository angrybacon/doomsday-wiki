const MANA_RE = /{{\s*(X*[0-99]*[WUBRG]*)\s*}}/g;


const reactify = (query, mana) => mana.split('').map(it => `<mana>${it}</mana>`).join('');


module.exports.replace = text => new Promise(resolve => {
  resolve(text.replace(MANA_RE, reactify));
});
