import { accordionClasses, Box, tableClasses } from '@mui/material';
import { useEffect, type FunctionComponent } from 'react';
import Markdown from 'react-markdown';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import remarkToc from 'remark-toc';
import { type PluggableList } from 'unified';

// eslint-disable-next-line import/no-cycle
import { COMPONENTS, COMPONENTS_EXTRA } from '@/components/Remark/constants';
import { type Decklists } from '@/tools/decklists/types';
import { type Partial } from '@/tools/markdown/types';
import { remarkAccordion } from '@/tools/remark/remarkAccordion.client';
import { remarkBase } from '@/tools/remark/remarkBase.client';
import { remarkCard } from '@/tools/remark/remarkCard.client';
import { remarkDecklist } from '@/tools/remark/remarkDecklist.client';
import { remarkMana } from '@/tools/remark/remarkMana.client';
import { remarkRow } from '@/tools/remark/remarkRow.client';

interface Props {
  decklists: Decklists;
  markdown: Partial;
  /** Whether the component should scroll to the current anchor. */
  withScroll?: boolean;
  withWrapper?: boolean;
}

export const Remark: FunctionComponent<Props> = ({
  decklists,
  markdown,
  withScroll = true,
  withWrapper = true,
}) => {
  /** Vendor plugins to run against the node tree. */
  const basePlugins: PluggableList = [
    remarkDirective,
    remarkGfm,
    remarkSlug,
    [remarkToc, { maxDepth: 3, ordered: true, tight: true }],
  ];

  /**
   * Our own remarkers to run against the node tree.
   * They should be used after vendor plugins. The `remarkBase` plugin should
   * always run first.
   */
  const customPlugins: PluggableList = [
    remarkBase,
    [remarkAccordion, { decklists, partials: markdown.partials }],
    remarkCard,
    [remarkDecklist, { decklists }],
    remarkMana,
    [remarkRow, { scries: markdown.scries }],
  ];

  const children = (
    <Markdown
      components={{ ...COMPONENTS, ...COMPONENTS_EXTRA }}
      remarkPlugins={[...basePlugins, ...customPlugins]}
      skipHtml
    >
      {markdown.text}
    </Markdown>
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
