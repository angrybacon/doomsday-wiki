import cookie from 'js-cookie';


class Cookie {

  static cookies = {
    dark: 'ddftwiki.dark',
  };

  static duration = {
    long: {expires: 365},
    short: {expire: 1 / 24 / 60 * 10},
  };

  static get = cookie.getJSON;

  static set = cookie.set;
}


export default Cookie;
