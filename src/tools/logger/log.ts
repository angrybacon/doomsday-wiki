enum Color {
  BLUE = '\x1b[34m',
  CYAN = '\x1b[36m',
  GREEN = '\x1b[32m',
  MAGENTA = '\x1b[35m',
  RED = '\x1b[31m',
  RESET = '\x1b[0m',
  YELLOW = '\x1b[33m',
}

export enum Scope {
  CLOCK = 'clock',
  REMARK = 'remark',
  SCRYFALL = 'scryfall',
}

const SCOPE_SPECIFICATIONS: Record<Scope, Color> = {
  [Scope.CLOCK]: Color.BLUE,
  [Scope.REMARK]: Color.GREEN,
  [Scope.SCRYFALL]: Color.MAGENTA,
};

type Logger = (message: string, scope?: Scope) => void;

export const log: Logger = (message, scope) => {
  const color: string = scope ? SCOPE_SPECIFICATIONS[scope] : '';
  const prefix = scope ? `${color}[${scope}]${color && Color.RESET} ` : '';
  // eslint-disable-next-line no-console
  console.info('\r%s%s', prefix, message);
};

export const logVerbose: Logger = (...parameters) => {
  if (process.env.VERBOSE === '1') {
    log(...parameters);
  }
};
