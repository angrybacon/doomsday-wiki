const React = require ('react');
const Layout = require('./src/components/Layout').default;
const { SidebarProvider } = require('./src/contexts/Sidebar');
const { ThemeProvider } = require('./src/contexts/Theme');


/* eslint-disable-next-line react/display-name, react/prop-types */
exports.wrapPageElement = ({ element, ...rest }) => (
  <Layout children={element} {...rest} />
);


/* eslint-disable-next-line react/display-name, react/prop-types */
exports.wrapRootElement = ({ element }) => (
  <SidebarProvider>
    <ThemeProvider>
      {element}
    </ThemeProvider>
  </SidebarProvider>
);
