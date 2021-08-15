import fs from 'fs';
import { join } from 'path';

/**
 * Generator to walk through `directory` and yield all files.
 * Return tuples containing all parent folders in sequence. End the tuple with
 * the actual filename, sans file extension.
 */
export async function* walk(
  directory: string,
  accumulator: string[] = []
): AsyncGenerator<string[]> {
  for await (const it of await fs.promises.opendir(directory)) {
    const entry = join(directory, it.name);
    if (it.isDirectory()) {
      yield* walk(entry, [...accumulator, it.name]);
    } else if (it.isFile()) {
      const name = it.name.replace(/\.mdx?$/, '');
      yield [...accumulator, name];
    }
  }
}
