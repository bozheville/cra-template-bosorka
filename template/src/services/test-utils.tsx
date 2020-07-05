import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Global } from '@emotion/core';

import globalStyles from 'styled/global';
import theme from './theme';

export const CustomWrapper: React.FC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Global styles={globalStyles} />
    {children}
  </ThemeProvider>
);

export const RouterWrapper: React.FC<{}> = ({ children }) => (
  <CustomWrapper>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </CustomWrapper>
);

const customRender = (component: React.ReactElement ) =>
  render(component, { wrapper: CustomWrapper });

export const renderWithRouter = (component: React.ReactElement ) =>
  render(component, { wrapper: RouterWrapper });

export * from '@testing-library/react';
export { customRender as render };
