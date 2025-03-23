const RE =
  /<\s*meta\s+property="og:description"\s+content="([^"]+?)\.?"\s*\/?>/;
//            ╰────────╰──────────────╯   ╰───────╰───────────╯

export const getClock = async () => {
  const url = 'https://thebulletin.org/doomsday-clock';
  const response = await fetch(url, { cache: 'force-cache' });
  if (!response.ok) throw new Error('Failed to fetch Doomsday clock URL');
  const html = await response.text();
  const [, clock] = html.match(RE) || [];
  if (!clock) throw new Error('Failed to parse Doomsday clock description');
  return clock;
};
