import React from 'react';
import { Box } from "@chakra-ui/react";

import Header from '../Header';
import Footer from '../Footer';

import { ILayoutProps } from './types';

const Layout: React.FC<ILayoutProps> = ({
  menuItems,
  children
}) => {
  return (
    <>
      <Header items={menuItems} />
      <Box
        as="section"
        flex="1 0 auto"
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

Layout.displayName = 'Layout';

export default Layout;
