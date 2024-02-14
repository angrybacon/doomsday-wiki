import { Box } from '@mui/material';
import { alpha, Theme } from '@mui/material/styles';
import { type SystemStyleObject } from '@mui/system';
import { type FunctionComponent } from 'react';
import { type ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';

import { Card } from '@/components/Card/Card';
import { gutters } from '@/theme/tools/gutters';
import { type ScryCard } from '@/tools/scryfall/types';

const VARIANTS = {
  CENTERED: 'CENTERED',
  PILE: 'PILE',
} as const;

const variantStyles: Record<
  keyof typeof VARIANTS,
  (theme: Theme) => SystemStyleObject<Theme>
> = {
  CENTERED: ({ mixins }) => ({
    ...mixins.gutters,
    justifyContent: 'space-around',
    mx: -1,
    '> *': { flexBasis: '25%', maxWidth: '25%' },
  }),
  PILE: (theme) => ({
    ...gutters(theme),
    bgcolor: alpha(theme.palette.primary.light, 0.1),
    border: 1,
    borderColor: 'divider',
    borderLeft: 0,
    borderRight: 0,
    py: { xs: 2, sm: 4 }, // NOTE Should match `gutters`
    '> *': { width: 0.2 },
  }),
};

interface Props extends ReactMarkdownProps {
  variant?: string;
  node: ReactMarkdownProps['node'] & {
    properties: {
      cards?: { data: ScryCard[]; id?: string }[];
    };
  };
}

export const RemarkRow: FunctionComponent<Props> = ({ node, variant }) => {
  // NOTE We retrieve cards from the Hast properties which support complex
  //      objects as opposed to inline properties which get converted to a
  //      string of `[object Object] [object Object] ...`.
  const { cards = [] } = node.properties;
  const variantKey = variant as keyof typeof VARIANTS;
  const variantStyle = VARIANTS[variantKey] || VARIANTS.CENTERED;
  return (
    <Box sx={({ mixins }) => mixins.barf}>
      <Box
        sx={[
          { display: 'flex', mx: { xs: -0.25, sm: -0.5, md: -1 } },
          variantStyles[variantStyle],
        ]}
      >
        {cards.map(({ data, id }) => (
          <Box key={id} sx={{ px: { xs: 0.25, sm: 0.5, md: 1 } }}>
            <Card data={data} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
