import React from 'react';

import Layout from '../Layout';
import { SidebarProvider } from '../../contexts/Sidebar';
import { ThemeProvider } from '../../contexts/Theme';


export default function Application ({ children }) {
  return (
    <SidebarProvider>
      <ThemeProvider>
        <Layout children={children} />
      </ThemeProvider>
    </SidebarProvider>
  );
}
