import { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { Box } from '@mui/material';
import { Theme, alpha } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';
import { Card } from '@/components/Card/Card';
import { gutters } from '@/theme/tools/gutters';
import type { ScryCard } from '@/tools/scryfall/types';

enum Variant {
  CENTERED = 'CENTERED',
  PILE = 'PILE',
}

const variantStyles: Record<
  Variant,
  (theme: Theme) => SystemStyleObject<Theme>
> = {
  [Variant.CENTERED]: (theme) => ({
    ...theme.mixins.gutters,
    justifyContent: 'space-around',
    mx: -1,
    '> *': { flexBasis: '25%', maxWidth: '25%' },
  }),
  [Variant.PILE]: (theme) => ({
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

export interface Props extends ReactMarkdownProps {
  node: ReactMarkdownProps['node'] & {
    properties: {
      cards: { data: ScryCard[]; id?: string }[];
      variant?: string;
    };
  };
}

export const RemarkRow: FunctionComponent<Props> = ({ node }) => {
  const { cards = [], variant } = node.properties;
  const variantKey = Object.values(Variant).includes(variant as Variant)
    ? Variant[variant as keyof typeof Variant]
    : Variant.CENTERED;
  return (
    <Box sx={(theme) => theme.mixins.barf}>
      <Box
        sx={[
          { display: 'flex', mx: { xs: -0.25, sm: -0.5, md: -1 } },
          variantStyles[variantKey],
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
