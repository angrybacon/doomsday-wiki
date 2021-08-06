import { readdirSync } from 'fs';
import { join, parse } from 'path';

/**
 * Generator to walk through `directory` and yield all files.
 * Return a tuple containing all parent folders in an array and the file
 * extension.
 * When `extension` is specified, only return files that match.
 * Prefer synchronous exploration since order matters.
 */
export function* walk(
  directory: string,
  extension: string,
  accumulator: string[] = []
): Generator<string[]> {
  // NOTE Looping over the stream requires the `--downlevelIteration` flag
  for (const file of readdirSync(directory, { withFileTypes: true })) {
    const entry = join(directory, file.name);
    const { ext, name } = parse(file.name);
    if (file.isDirectory()) {
      yield* walk(entry, extension, [...accumulator, file.name]);
    } else if (file.isFile() && (!extension || ext === extension)) {
      yield [...accumulator, name];
    }
  }
}
