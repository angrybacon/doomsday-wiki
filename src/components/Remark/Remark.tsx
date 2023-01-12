import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import remarkToc from 'remark-toc';
import type { PluggableList } from 'unified';
import { Box } from '@mui/material';
// eslint-disable-next-line import/no-cycle
import { COMPONENTS, COMPONENTS_EXTRA } from '@/components/Remark/constants';
import type { Decklists } from '@/tools/decklists/types';
import type { Markdown } from '@/tools/markdown/types';
import { remarkAccordion } from '@/tools/remark/remarkAccordion';
import { remarkBase } from '@/tools/remark/remarkBase';
import { remarkCard } from '@/tools/remark/remarkCard';
import { remarkDecklist } from '@/tools/remark/remarkDecklist';
import { remarkMana } from '@/tools/remark/remarkMana';
import { remarkRow } from '@/tools/remark/remarkRow';

interface Props {
  decklists: Decklists;
  markdown: Markdown;
}

export const Remark: FunctionComponent<Props> = ({ decklists, markdown }) => {
  const { partials, scries, text } = markdown;

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
    [remarkAccordion, { decklists, partials }],
    remarkCard,
    [remarkDecklist, { decklists }],
    remarkMana,
    [remarkRow, { scries }],
  ];

  return (
    <Box sx={{ '> :not(p:first-of-type)': { mt: 3 } }}>
      <ReactMarkdown
        components={{ ...COMPONENTS, ...COMPONENTS_EXTRA }}
        remarkPlugins={[...basePlugins, ...customPlugins]}
        skipHtml
      >
        {text}
      </ReactMarkdown>
    </Box>
  );
};
