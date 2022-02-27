import { existsSync, readdirSync } from 'fs';
import { join, parse } from 'path';
import { MARKDOWN_EXTENSION } from '@/tools/markdown/constants/Files';

interface WalkOptions {
  depth?: number;
  extension?: string;
}

/**
 * Generator to walk through `directory` and yield all files.
 * Return a tuple containing all successive parent folders followed by the file
 * extension.
 * When `extension` is specified, only return files that match.
 * Prefer synchronous exploration since order matters.
 */
export function* walk(
  directory: string,
  options: WalkOptions = {},
  accumulator: string[] = []
): Generator<string[]> {
  const { depth, extension } = { extension: MARKDOWN_EXTENSION, ...options };
  if (accumulator.length === depth) return;
  if (existsSync(directory)) {
    // NOTE Looping over the stream requires the `--downlevelIteration` flag
    for (const file of readdirSync(directory, { withFileTypes: true })) {
      const entry = join(directory, file.name);
      const { ext, name } = parse(file.name);
      if (file.isDirectory()) {
        yield* walk(entry, { depth, extension }, [...accumulator, file.name]);
      } else if (file.isFile() && (!extension || ext === extension)) {
        yield [...accumulator, name];
      }
    }
  }
}
