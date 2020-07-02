import React from 'react';
import { Box } from '@chakra-ui/core';

import { IPageContentProps } from './types';

const Container: React.FC<IPageContentProps> = ({
  children,
  ...props
}) => {
  return (
    <Box
      width={[
        '100%', // base
        '100%', // 480px upwards
        '100%', // 768px upwards
        '992px', // 992px upwards
      ]}
      p="1rem"
      m="0 auto"
      {...props}
    >
      {children}
    </Box>
  );
};

Container.displayName = 'Container';

export default Container;
