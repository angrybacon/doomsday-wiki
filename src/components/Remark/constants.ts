import type { FunctionComponent } from 'react';
import type { Components } from 'react-markdown';
import type {
  TableDataCellComponent,
  TableHeaderCellComponent,
} from 'react-markdown/lib/ast-to-react';
// eslint-disable-next-line import/no-cycle
import {
  RemarkAccordion,
  Props as RemarkAccordionProps,
} from '@/components/Remark/renderers/RemarkAccordion';
import {
  RemarkCard,
  Props as RemarkCardProps,
} from '@/components/Remark/renderers/RemarkCard';
import { RemarkCode } from '@/components/Remark/renderers/RemarkCode';
import {
  RemarkDecklist,
  Props as RemarkDecklistProps,
} from '@/components/Remark/renderers/RemarkDecklist';
import { RemarkDivider } from '@/components/Remark/renderers/RemarkDivider';
import { RemarkHeading } from '@/components/Remark/renderers/RemarkHeading';
import { RemarkImage } from '@/components/Remark/renderers/RemarkImage';
import { RemarkLink } from '@/components/Remark/renderers/RemarkLink';
import { RemarkList } from '@/components/Remark/renderers/RemarkList';
import {
  RemarkMana,
  Props as RemarkManaProps,
} from '@/components/Remark/renderers/RemarkMana';
import { RemarkQuote } from '@/components/Remark/renderers/RemarkQuote';
import { RemarkParagraph } from '@/components/Remark/renderers/RemarkParagraph';
import {
  RemarkRow,
  Props as RemarkRowProps,
} from '@/components/Remark/renderers/RemarkRow';
import {
  RemarkSoundcloud,
  Props as RemarkSoundcloudProps,
} from '@/components/Remark/renderers/RemarkSoundcloud';
import {
  RemarkTable,
  RemarkTableBody,
  RemarkTableCell,
  RemarkTableHead,
  RemarkTableRow,
} from '@/components/Remark/renderers/RemarkTable';
import {
  RemarkYoutube,
  Props as RemarkYoutubeProps,
} from '@/components/Remark/renderers/RemarkYoutube';

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
};

export const COMPONENTS_EXTRA: {
  accordion: FunctionComponent<RemarkAccordionProps>;
  card: FunctionComponent<RemarkCardProps>;
  decklist: FunctionComponent<RemarkDecklistProps>;
  mana: FunctionComponent<RemarkManaProps>;
  row: FunctionComponent<RemarkRowProps>;
  soundcloud: FunctionComponent<RemarkSoundcloudProps>;
  youtube: FunctionComponent<RemarkYoutubeProps>;
} = {
  accordion: RemarkAccordion,
  card: RemarkCard,
  decklist: RemarkDecklist,
  mana: RemarkMana,
  row: RemarkRow,
  soundcloud: RemarkSoundcloud,
  youtube: RemarkYoutube,
};
