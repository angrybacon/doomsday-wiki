type Node = {
  position?: { start?: { line?: number } };
};

export class RemarkError extends Error {
  constructor(
    message: string,
    options: { file?: string; node?: Node | undefined } = {},
  ) {
    const { file = '', node } = options;
    const line = node?.position?.start?.line;
    let position = file;
    position += file && line !== undefined ? `:${line}` : '';
    super(message + (position ? ` in "${position}"` : ''));
    this.name = 'RemarkError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
