const React = require ('react');
const Layout = require('./src/components/Layout').default;
const { SidebarProvider } = require('./src/contexts/Sidebar');
const { ThemeProvider } = require('./src/contexts/Theme');


exports.wrapPageElement = ({ element, ...rest }) => (
  <Layout children={element} {...rest} />
);


exports.wrapRootElement = ({ element }) => (
  <SidebarProvider>
    <ThemeProvider>
      {element}
    </ThemeProvider>
  </SidebarProvider>
);
