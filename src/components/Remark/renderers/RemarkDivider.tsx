import React, { FunctionComponent } from 'react';
import Divider from '@mui/material/Divider';

export const RemarkDivider: FunctionComponent = () => (
  <Divider
    sx={(theme) => ({
      ...theme.mixins.barf,
      // NOTE Increase specificity
      '&&': { my: 3 },
    })}
  />
);
