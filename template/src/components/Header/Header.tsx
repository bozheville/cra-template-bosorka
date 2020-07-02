import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/core';

import Button from 'components/Button';
import menuItems from 'services/get-menu-items';

import { IHeaderProps } from './types';
import Container from '../Container';

const Header: React.FC<IHeaderProps> = () => {
  return (
    <Box as="header" bg="gray.800" color="white">
      <Container>
        <Flex>
          <Flex>
            <Button
              as={Link}
              to="/"
              variant="link"
              variantColor="white"
            >
              Home
            </Button>
          </Flex>
          {menuItems.map((item) => (
            <Flex ml="1rem" key={`menu-${item.link}`}>
              <Button
                as={Link}
                to={item.link}
                variant="link"
                variantColor="white"
              >
                {item.title}
              </Button>
            </Flex>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

Header.displayName = 'Header';

export default Header;
