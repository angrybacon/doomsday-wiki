import { accordionClasses, Box, tableClasses } from '@mui/material';
import { useEffect, type FunctionComponent } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import { type PluggableList } from 'unified';

import {
  Accordion,
  Card,
  Code,
  Decklist,
  Divider,
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
  hr: Divider,
  img: Image,
  // NOTE The `code` entries handle both block and inline code markup
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
  /** Whether the component should scroll to the current anchor. */
  withScroll?: boolean;
  withWrapper?: boolean;
};

export const Markdown: FunctionComponent<Props> = ({
  markdown,
  withScroll = true,
  withWrapper = true,
}) => {
  const plugins = {
    rehypePlugins: [rehypeSlug],
    remarkPlugins: [
      // NOTE Vendor remarkers
      remarkDirective,
      remarkGfm,
      [remarkToc, { maxDepth: 3, ordered: true, tight: true }],
      // NOTE Our own remarkers
      remarkBase,
      remarkCard,
      [remarkDecklist, { decklists: markdown.decklists }],
      [remarkRow, { scries: markdown.scries }],
    ],
  } as const satisfies Record<string, PluggableList>;

  const children = (
    <ReactMarkdown
      components={{ ...COMPONENTS, ...COMPONENTS_EXTRA }}
      skipHtml
      {...plugins}
    >
      {markdown.text}
    </ReactMarkdown>
  );

  useEffect(() => {
    if (withScroll) {
      const { hash } = window.location;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        // NOTE The hardcoded delay is necessary to handle embedded tweets for
        //      which the total height cannot be guessed in advanced.
        setTimeout(() => element?.scrollIntoView(), 700);
      }
    }
  }, [withScroll]);

  return withWrapper ? (
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        [`.${accordionClasses.root} + .${accordionClasses.root}`]: { mt: -3 },
        [`.${tableClasses.root} + .${tableClasses.root}`]: { mt: -3 },
      }}
    >
      {children}
    </Box>
  ) : (
    children
  );
};
