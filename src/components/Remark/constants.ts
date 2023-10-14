import type { Components } from 'react-markdown';
import type {
  TableDataCellComponent,
  TableHeaderCellComponent,
} from 'react-markdown/lib/ast-to-react';
// eslint-disable-next-line import/no-cycle
import { RemarkAccordion } from '@/components/Remark/renderers/RemarkAccordion';
import { RemarkCard } from '@/components/Remark/renderers/RemarkCard';
import { RemarkCode } from '@/components/Remark/renderers/RemarkCode';
import { RemarkDecklist } from '@/components/Remark/renderers/RemarkDecklist';
import { RemarkDivider } from '@/components/Remark/renderers/RemarkDivider';
import { RemarkHeading } from '@/components/Remark/renderers/RemarkHeading';
import { RemarkImage } from '@/components/Remark/renderers/RemarkImage';
import { RemarkLink } from '@/components/Remark/renderers/RemarkLink';
import { RemarkList } from '@/components/Remark/renderers/RemarkList';
import { RemarkMana } from '@/components/Remark/renderers/RemarkMana';
import { RemarkQuote } from '@/components/Remark/renderers/RemarkQuote';
import { RemarkParagraph } from '@/components/Remark/renderers/RemarkParagraph';
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

export const COMPONENTS: Components = {
  a: RemarkLink,
  blockquote: RemarkQuote,
  code: RemarkCode,
  h1: RemarkHeading,
  h2: RemarkHeading,
  h3: RemarkHeading,
  h4: RemarkHeading,
  h5: RemarkHeading,
  h6: RemarkHeading,
  hr: RemarkDivider,
  img: RemarkImage,
  ol: RemarkList as Components['ol'],
  p: RemarkParagraph,
  table: RemarkTable,
  tbody: RemarkTableBody,
  td: RemarkTableCell as TableDataCellComponent,
  th: RemarkTableCell as TableHeaderCellComponent,
  thead: RemarkTableHead,
  tr: RemarkTableRow,
  ul: RemarkList as Components['ul'],
} as const;

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
