import { FunctionComponent } from 'react';
import Divider from '@mui/material/Divider';

export const RemarkDivider: FunctionComponent = () => (
  <Divider
    sx={(theme) => ({
      ...theme.mixins.barf,
      my: `${theme.spacing(3)}!important`,
    })}
  />
);
