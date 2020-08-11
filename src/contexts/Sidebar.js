import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

export const SidebarContext = React.createContext();
export function SidebarProvider({ children }) {
  const [ drawer, setDrawer ] = useState(false);
  const toggleDrawer = useCallback(open => () => {
    setDrawer(previous => open === undefined ? !previous.drawer : !!open);
  }, []);
  return (
    <SidebarContext.Provider value={{drawer, toggleDrawer}}>
      {children}
    </SidebarContext.Provider>
  );
}

SidebarProvider.propTypes = {
  children: PropTypes.node,
};
