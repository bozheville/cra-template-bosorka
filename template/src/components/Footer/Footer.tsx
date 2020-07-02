import React from 'react';
import { Box } from '@chakra-ui/core';
import { IFooterProps } from './types';

const Footer: React.FC<IFooterProps> = () => {
  return (
    <Box
      as="footer"
      bg="gray.800"
      p="1rem"
      pb="1.5rem"
      color="white"
      fontSize="0.75rem"
      textAlign="center"
    >
    </Box>
  );
};

Footer.displayName = 'Footer';

export default Footer;
