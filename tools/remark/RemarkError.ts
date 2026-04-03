type Position = {
  column?: number;
  line?: number;
  offset?: number;
};

type Node = {
  position?: { end?: Position; start?: Position };
};

export class RemarkError extends Error {
  constructor(message: string, options: { node?: Node; path?: string }) {
    const { column, line } = options.node?.position?.start ?? {};
    let location = options.path ?? '';
    location += location && line !== undefined ? `:${line}` : '';
    location += location && column !== undefined ? `:${column}` : '';
    super(message + (location ? ` in "${location}"` : ''));
    this.name = 'RemarkError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
