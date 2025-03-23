import { makeMenu } from '@korumite/kiwi/server';

import { CHAPTERS } from '@/tools/markdown/files';

/** A structured list of all chapters within their respective categories */
export const MENU = makeMenu(CHAPTERS.CARDS);
