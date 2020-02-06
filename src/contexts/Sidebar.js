import PropTypes from 'prop-types';
import React, { useState } from 'react';


export const SidebarContext = React.createContext();
export function SidebarProvider({ children }) {

  const [ drawer, setDrawer ] = useState(false);
  const [ sidebar, setSidebar ] = useState(true);

  const toggleDrawer = open => () => {
    setDrawer(previous => open === undefined ? !previous.drawer : !!open);
  };

  const toggleSidebar = open => () => {
    setSidebar(previous => open === undefined ? !previous.sidebar : !!open);
  };

  return (
    <SidebarContext.Provider children={children} value={{
      drawer,
      sidebar,
      toggleDrawer,
      toggleSidebar,
    }} />
  );
}


SidebarProvider.propTypes = {
  children: PropTypes.node,
};
