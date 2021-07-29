import fs from 'fs';
import { join, parse } from 'path';

/**
 * Generator to walk through `directory` and yield all files with the specified
 * `extension`, if any.
 * Return a tuple containing all parent folders in an array and the file
 * extension.
 */
export async function* walk(
  directory: string,
  extension: string,
  accumulator: string[] = []
): AsyncGenerator<string[]> {
  for await (const it of await fs.promises.opendir(directory)) {
    const entry = join(directory, it.name);
    const { ext, name } = parse(it.name);
    if (it.isDirectory()) {
      yield* walk(entry, extension, [...accumulator, it.name]);
    } else if (it.isFile() && (!extension || ext === extension)) {
      yield [...accumulator, name];
    }
  }
}
