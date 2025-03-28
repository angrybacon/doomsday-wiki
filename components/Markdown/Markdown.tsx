import {
  accordionClasses,
  Box,
  tableClasses,
  type SxProps,
} from '@mui/material';
import { type FunctionComponent } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';

import { Divider } from '@/components/Divider/Divider';
import {
  Accordion,
  Card,
  Code,
  Decklist,
  Heading,
  Image,
  Link,
  Mana,
  Quote,
  Row,
  Soundcloud,
  Spoiler,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Youtube,
} from '@/components/Markdown/renderers';
import { SpoilsCalculator } from '@/components/SpoilsCalculator/SpoilsCalculator';
import {
  type Article,
  type Chapter,
  type Partial,
} from '@/tools/markdown/types';
import { remarkBase } from '@/tools/remark/remarkBase.client';
import { remarkCard } from '@/tools/remark/remarkCard.client';
import { remarkDecklist } from '@/tools/remark/remarkDecklist.client';
import { remarkRow } from '@/tools/remark/remarkRow.client';

const COMPONENTS = {
  a: Link,
  blockquote: Quote,
  code: Code,
  h1: Heading<'h1'>,
  h2: Heading<'h2'>,
  h3: Heading<'h3'>,
  h4: Heading<'h4'>,
  h5: Heading<'h5'>,
  h6: Heading<'h6'>,
  hr: () => <Divider />,
  img: Image,
  // NOTE The `code` entries already handle both block and inline code markup
  pre: ({ children }) => <>{children}</>,
  table: Table,
  tbody: TableBody,
  td: TableCell<'td'>,
  th: TableCell<'th'>,
  thead: TableHead,
  tr: TableRow,
} as const satisfies Components;

const COMPONENTS_EXTRA = {
  accordion: Accordion,
  card: Card,
  decklist: Decklist,
  mana: Mana,
  row: Row,
  soundcloud: Soundcloud,
  spoiler: Spoiler,
  spoils: SpoilsCalculator,
  youtube: Youtube,
} as const;

type Props = {
  markdown: Article | Chapter | Partial;
  sx?: SxProps;
};

export const Markdown: FunctionComponent<Props> = ({
  markdown: { decklists, file, scries, text },
  sx,
}) => (
  <Box
    sx={[
      {
        display: 'grid',
        gap: 3,
        [`.${accordionClasses.root}`]: {
          [`&.${accordionClasses.expanded}`]: { my: 0 },
          [`& + .${accordionClasses.root}`]: { mt: -3 },
        },
        [`.${tableClasses.root} + .${tableClasses.root}`]: { mt: -3 },
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    <ReactMarkdown
      components={{ ...COMPONENTS, ...COMPONENTS_EXTRA }}
      skipHtml
      rehypePlugins={[rehypeSlug]}
      // TODO Since the Next migration we can probably do all that SSR now
      remarkPlugins={[
        // NOTE Vendor remarkers
        remarkDirective,
        remarkGfm,
        // NOTE Our own remarkers
        [remarkBase, { file, names: Object.keys(COMPONENTS_EXTRA) }],
        [remarkCard, { file }],
        [remarkDecklist, { decklists, file }],
        [remarkRow, { file, scries }],
      ]}
    >
      {text}
    </ReactMarkdown>
  </Box>
);
