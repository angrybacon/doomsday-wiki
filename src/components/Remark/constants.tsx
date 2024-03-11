import { type Components } from 'react-markdown';

// eslint-disable-next-line import/no-cycle
import { RemarkAccordion } from '@/components/Remark/renderers/RemarkAccordion';
import { RemarkCard } from '@/components/Remark/renderers/RemarkCard';
import { RemarkCode } from '@/components/Remark/renderers/RemarkCode';
import { RemarkDecklist } from '@/components/Remark/renderers/RemarkDecklist';
import { RemarkDivider } from '@/components/Remark/renderers/RemarkDivider';
import { RemarkHeading } from '@/components/Remark/renderers/RemarkHeading';
import { RemarkImage } from '@/components/Remark/renderers/RemarkImage';
import { RemarkLink } from '@/components/Remark/renderers/RemarkLink';
import {
  RemarkListOrdered,
  RemarkListUnordered,
} from '@/components/Remark/renderers/RemarkList';
import { RemarkMana } from '@/components/Remark/renderers/RemarkMana';
import { RemarkParagraph } from '@/components/Remark/renderers/RemarkParagraph';
import { RemarkQuote } from '@/components/Remark/renderers/RemarkQuote';
import { RemarkRow } from '@/components/Remark/renderers/RemarkRow';
import { RemarkSoundcloud } from '@/components/Remark/renderers/RemarkSoundcloud';
import { RemarkSpoiler } from '@/components/Remark/renderers/RemarkSpoiler';
import {
  RemarkTable,
  RemarkTableBody,
  RemarkTableCell,
  RemarkTableHead,
  RemarkTableRow,
} from '@/components/Remark/renderers/RemarkTable';
import { RemarkTweet } from '@/components/Remark/renderers/RemarkTweet';
import { RemarkYoutube } from '@/components/Remark/renderers/RemarkYoutube';
import { SpoilsCalculator } from '@/components/SpoilsCalculator/SpoilsCalculator';

export const COMPONENTS =
  // prettier-ignore
  {
  a:          RemarkLink,
  blockquote: RemarkQuote,
  code:       RemarkCode,
  h1:         RemarkHeading<'h1'>,
  h2:         RemarkHeading<'h2'>,
  h3:         RemarkHeading<'h3'>,
  h4:         RemarkHeading<'h4'>,
  h5:         RemarkHeading<'h5'>,
  h6:         RemarkHeading<'h6'>,
  hr:         RemarkDivider,
  img:        RemarkImage,
  ol:         RemarkListOrdered,
  p:          RemarkParagraph,
  // NOTE The `code` entries handle both block and inline code markup
  pre:        ({children})=> <>{children}</>,
  table:      RemarkTable,
  tbody:      RemarkTableBody,
  td:         RemarkTableCell<'td'>,
  th:         RemarkTableCell<'th'>,
  thead:      RemarkTableHead,
  tr:         RemarkTableRow,
  ul:         RemarkListUnordered,
} as const satisfies Components;

export const COMPONENTS_EXTRA = {
  accordion: RemarkAccordion,
  card: RemarkCard,
  decklist: RemarkDecklist,
  mana: RemarkMana,
  row: RemarkRow,
  soundcloud: RemarkSoundcloud,
  spoiler: RemarkSpoiler,
  spoils: SpoilsCalculator,
  tweet: RemarkTweet,
  youtube: RemarkYoutube,
} as const;
