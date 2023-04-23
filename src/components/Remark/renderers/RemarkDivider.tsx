import { FunctionComponent } from 'react';
import Divider from '@mui/material/Divider';

export const RemarkDivider: FunctionComponent = () => (
  <Divider
    sx={({ mixins, spacing }) => ({
      ...mixins.barf,
      my: `${spacing(3)}!important`,
    })}
  />
);
