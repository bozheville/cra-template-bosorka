import { ButtonProps } from '@chakra-ui/core';

type Modify<T, R> = Omit<T, keyof R> & R;

export type IButtonProps<C extends React.ElementType> = Modify<
  React.ComponentProps<C>,
  {
    as?: C;
  }
> & ButtonProps;
