// oxlint-disable import/max-dependencies
import type { ScrySingleResponse } from '@korumite/scrydrop';
import type { Components } from 'react-markdown';
import type { Decklists } from '~/tools/decklists/types';

import { Box, accordionClasses } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';

import { Divider } from '~/components/Divider/Divider';
import { remarker } from '~/components/Markdown/remarker';
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
} from '~/components/Markdown/renderers';
import { SpoilsCalculator } from '~/components/SpoilsCalculator/SpoilsCalculator';
import { remarkBase } from '~/tools/remark/remarkBase';
import { remarkCard } from '~/tools/remark/remarkCard';
import { remarkDecklist } from '~/tools/remark/remarkDecklist';
import { remarkRow } from '~/tools/remark/remarkRow';

const COMPONENTS = {
  a: Link,
  blockquote: Quote,
  code: Code,
  h1: Heading,
  h2: Heading,
  h3: Heading,
  h4: Heading,
  h5: Heading,
  h6: Heading,
  hr: Divider,
  img: Image,
  table: Table,
  tbody: TableBody,
  td: TableCell,
  th: TableCell,
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
  decklists: Decklists;
  path: string;
  scries: Record<string, ScrySingleResponse>;
  text: string;
};

export const Markdown = ({ decklists, path, scries, text }: Props) => (
  <Box
    component="section"
    sx={{
      display: 'grid',
      gap: 3,
      '> *': { minWidth: 0 },
      [`.${accordionClasses.root} + .${accordionClasses.root}`]: { mt: -3 },
    }}
  >
    <ReactMarkdown
      components={{ ...COMPONENTS, ...COMPONENTS_EXTRA }}
      skipHtml
      rehypePlugins={[rehypeSlug]}
      remarkPlugins={[
        // NOTE Vendor remarkers
        remarkDirective,
        remarkGfm,
        // NOTE Our own remarkers
        remarker(remarkBase, path, Object.keys(COMPONENTS_EXTRA)),
        remarker(remarkCard, path, scries),
        remarker(remarkDecklist, path, decklists),
        remarker(remarkRow, path, scries),
      ]}
    >
      {text}
    </ReactMarkdown>
  </Box>
);
