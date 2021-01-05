export class Local {

  static names = {
    dark: 'ddft:dark',
  };

  static clear = name => name ? localStorage.removeItem(name) : localStorage.clear();

  static get = (name, fallback) => {
    const value = localStorage.getItem(name);
    if (!value && fallback !== undefined) {
      this.set(name, typeof fallback === 'function' ? fallback() : fallback);
      return this.get(name);
    }
    try {
      return JSON.parse(value);
    }
    catch {
      return value;
    }
  };

  static set = (name, value, ...rest) => {
    value = value === undefined ? Math.floor(Date.now() / 1000) : value;
    value = typeof value === 'object' ? JSON.stringify(value) : value;
    localStorage.setItem(name, value, ...rest);
  };
}
