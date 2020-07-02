import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/core';

import { IButtonProps } from './types';

const Button = <C extends React.ElementType>(props: IButtonProps<C>) =>
  <ChakraButton {...props} />;

Button.displayName = 'Button';

export default Button;
