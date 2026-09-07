import type { ElementType, ReactNode } from 'react';
import type { ExtraProps } from 'react-markdown';

import { RemarkError } from '@korumite/kiwi';
import ErrorIcon from '@mui/icons-material/ErrorRounded';
import InfoIcon from '@mui/icons-material/InfoRounded';
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  Typography,
} from '@mui/material';

const SEVERITY_TO_DECORATIONS = {
  info: [InfoIcon, 'rgb(var(--mui-palette-info-mainChannel) / .2)'],
  warning: [ErrorIcon, 'rgb(var(--mui-palette-warning-mainChannel) / .2)'],
} as const satisfies Record<
  AdmonitionProps['severity'],
  [icon: ElementType, color: string]
>;

type AdmonitionProps = {
  children?: ReactNode;
  node: ExtraProps['node'];
  path?: string;
  severity: 'info' | 'warning';
  title?: string;
};

const Admonition = ({
  children,
  node,
  path,
  severity,
  title,
}: AdmonitionProps) => {
  if (!children) throw new RemarkError('Missing content', { node, path });
  if (!title?.trim()) throw new RemarkError('Missing title', { node, path });
  const [Icon, color] = SEVERITY_TO_DECORATIONS[severity];
  return (
    <MuiCard aria-label={title} component="section" sx={{ bgcolor: color }}>
      <MuiCardContent sx={{ display: 'grid', gap: 1 }}>
        <Typography
          component="p"
          sx={{ alignItems: 'center', display: 'flex', gap: 1 }}
          variant="h5"
        >
          <Icon fontSize="large" sx={{ color: `${severity}.main` }} />
          {title}
        </Typography>
        {children}
      </MuiCardContent>
    </MuiCard>
  );
};

type Props = {
  children?: ReactNode;
  node: ExtraProps['node'];
  path?: string;
  title?: string;
};

export const AdmonitionNote = (properties: Props) => (
  <Admonition {...properties} severity="info" />
);

export const AdmonitionWarning = (properties: Props) => (
  <Admonition {...properties} severity="warning" />
);
