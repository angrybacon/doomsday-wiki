import type { FunctionComponent } from 'react';
import type { Components } from 'react-markdown';
import {
  RemarkCard,
  Props as RemarkCardProps,
} from '@/components/Remark/renderers/RemarkCard';
import { RemarkCode } from '@/components/Remark/renderers/RemarkCode';
import {
  RemarkDecklist,
  Props as RemarkDecklistProps,
} from '@/components/Remark/renderers/RemarkDecklist';
import { RemarkHeading } from '@/components/Remark/renderers/RemarkHeading';
import { RemarkImage } from '@/components/Remark/renderers/RemarkImage';
import { RemarkLink } from '@/components/Remark/renderers/RemarkLink';
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
  img: RemarkImage,
  p: RemarkParagraph,
  table: RemarkTable,
  tbody: RemarkTableBody,
  td: RemarkTableCell,
  th: RemarkTableCell,
  thead: RemarkTableHead,
  tr: RemarkTableRow,
};

export const COMPONENTS_EXTRA: {
  card: FunctionComponent<RemarkCardProps>;
  decklist: FunctionComponent<RemarkDecklistProps>;
  row: FunctionComponent<RemarkRowProps>;
  soundcloud: FunctionComponent<RemarkSoundcloudProps>;
  youtube: FunctionComponent<RemarkYoutubeProps>;
} = {
  card: RemarkCard,
  decklist: RemarkDecklist,
  row: RemarkRow,
  soundcloud: RemarkSoundcloud,
  youtube: RemarkYoutube,
};
