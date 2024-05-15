import { type Components } from 'react-markdown';

import { Accordion } from '@/components/Markdown/renderers/Accordion';
import { Card } from '@/components/Markdown/renderers/Card';
import { Code } from '@/components/Markdown/renderers/Code';
import { Decklist } from '@/components/Markdown/renderers/Decklist';
import { Divider } from '@/components/Markdown/renderers/Divider';
import { Heading } from '@/components/Markdown/renderers/Heading';
import { Image } from '@/components/Markdown/renderers/Image';
import { Link } from '@/components/Markdown/renderers/Link';
import {
  ListOrdered,
  ListUnordered,
} from '@/components/Markdown/renderers/List';
import { Mana } from '@/components/Markdown/renderers/Mana';
import { Quote } from '@/components/Markdown/renderers/Quote';
import { Row } from '@/components/Markdown/renderers/Row';
import { Soundcloud } from '@/components/Markdown/renderers/Soundcloud';
import { Spoiler } from '@/components/Markdown/renderers/Spoiler';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/Markdown/renderers/Table';
import { Tweet } from '@/components/Markdown/renderers/Tweet';
import { Youtube } from '@/components/Markdown/renderers/Youtube';
import { SpoilsCalculator } from '@/components/SpoilsCalculator/SpoilsCalculator';

export const COMPONENTS =
  // prettier-ignore
  {
  a:          Link,
  blockquote: Quote,
  code:       Code,
  h1:         Heading<'h1'>,
  h2:         Heading<'h2'>,
  h3:         Heading<'h3'>,
  h4:         Heading<'h4'>,
  h5:         Heading<'h5'>,
  h6:         Heading<'h6'>,
  hr:         Divider,
  img:        Image,
  ol:         ListOrdered,
  // NOTE The `code` entries handle both block and inline code markup
  pre:        ({children}) => <>{children}</>,
  table:      Table,
  tbody:      TableBody,
  td:         TableCell<'td'>,
  th:         TableCell<'th'>,
  thead:      TableHead,
  tr:         TableRow,
  ul:         ListUnordered,
} as const satisfies Components;

export const COMPONENTS_EXTRA = {
  accordion: Accordion,
  card: Card,
  decklist: Decklist,
  mana: Mana,
  row: Row,
  soundcloud: Soundcloud,
  spoiler: Spoiler,
  spoils: SpoilsCalculator,
  tweet: Tweet,
  youtube: Youtube,
} as const;
