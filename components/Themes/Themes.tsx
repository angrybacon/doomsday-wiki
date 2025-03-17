'use client';

import {
  mdiLightbulbAutoOutline,
  mdiLightbulbOffOutline,
  mdiLightbulbOutline,
} from '@mdi/js';
import { Icon } from '@mdi/react';
import {
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  useColorScheme,
} from '@mui/material';
import { type MouseEvent } from 'react';

import { useLayout } from '@/hooks/useLayout';

export const Themes = () => {
  const { mode, setMode } = useColorScheme();
  const { onClose } = useLayout();

  const onThemeChange = (_: MouseEvent<HTMLElement>, value: string) => {
    if (value === 'dark' || value === 'light' || value === 'system') {
      setMode(value);
    }
    onClose();
  };

  return (
    <ToggleButtonGroup
      aria-label="Theme"
      color="primary"
      exclusive
      onChange={onThemeChange}
      size="small"
      value={mode}
    >
      <Tooltip title="Switch to light theme">
        <ToggleButton value="light">
          <Icon path={mdiLightbulbOutline} size={0.6} />
        </ToggleButton>
      </Tooltip>
      <Tooltip title="Use system preference">
        <ToggleButton value="system">
          <Icon path={mdiLightbulbAutoOutline} size={0.6} />
        </ToggleButton>
      </Tooltip>
      <Tooltip title="Switch to dark theme">
        <ToggleButton value="dark">
          <Icon path={mdiLightbulbOffOutline} size={0.6} />
        </ToggleButton>
      </Tooltip>
    </ToggleButtonGroup>
  );
};
