import React from 'react';
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';

import { IPromoItemProps } from './types';

const PromoItem: React.FC<IPromoItemProps> = ({
  title,
  description,
  actionName,
  link,
  image,
}) => {
  return (
    <Box
      maxW="100%"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
    >
      <Box h="12rem" bg="purple.100" p="0.5rem">
        <Image
          maxH="100%"
          m="0 auto"
          src={image}
          alt={title}
        />
      </Box>
      <Box p="1rem" textAlign="center">
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        <Text fontSize="lg">
          {description}
        </Text>
        {link && (
          <Button
            as="a"
            href={link}
            variant="solid"
          >
            {actionName}
          </Button>
        )}
      </Box>
    </Box>
  );
};

PromoItem.displayName = 'PromoItem';

export default PromoItem;
