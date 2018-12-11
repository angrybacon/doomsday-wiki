import React from 'react';


const SidebarContext = React.createContext();


export class SidebarProvider extends React.PureComponent {

  state = {
    drawerIsOpen: false,
    sidebarIsOpen: true,
  };

  toggleDrawer = open => () => {
    this.setState(state => ({drawerIsOpen: open === undefined ? !state.drawerIsOpen : !!open}));
  };

  toggleSidebar = open => () => {
    this.setState(state => ({sidebarIsOpen: open === undefined ? !state.sidebarIsOpen : !!open}));
  };

  render() {
    const { children } = this.props;
    return (
      <SidebarContext.Provider children={children} value={{
        state: this.state,
        toggleDrawer: this.toggleDrawer,
        toggleSidebar: this.toggleSidebar,
      }} />
    );
  }
}


export const SidebarConsumer = SidebarContext.Consumer;
