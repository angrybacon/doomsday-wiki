import { parse } from 'node-html-parser';
import type { HTMLElement } from 'node-html-parser';
import { parseClock } from '@/tools/clock/parseClock';
import { Scope, log } from '@/tools/logger/log';

const URL = 'https://thebulletin.org/doomsday-clock/current-time/';

type GetClock = () => Promise<string | null>;

/** Scrap URL and look for a headline describing the current Doomsday clock. */
export const getClock: GetClock = async () => {
  const response = await fetch(URL);
  const html = await response.text();
  const document: HTMLElement = parse(html);
  const [node] = document.querySelectorAll('h2');
  const text = node?.innerText;
  const result = (text && parseClock(text)) || null;
  log(`Retrieved '${result}'`, Scope.CLOCK);
  return result;
};
