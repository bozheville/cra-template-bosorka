import React, { Suspense, useMemo, useState } from 'react';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Global } from '@emotion/core';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Layout from 'components/Layout';
import PageDataContext from 'components/Page/PageContext';
import customTheme from 'services/theme';
import menuJson from 'services/menu-items.json';
import globalStyles from 'styled/global';
import { MenuItem } from 'types';

const menuItems = menuJson as unknown as MenuItem[];

const AboutPage = React.lazy(() => import('pages/About'));
const HomePage = React.lazy(() => import('pages/Home'));
const Page404 = React.lazy(() => import('pages/Page404'));

interface IApp {}

const App: React.FC<IApp> = () => {
  const [title, setTitle] = useState('');

  const pageContextState = useMemo(() => ({ title, setTitle }), [title, setTitle]);
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Global styles={globalStyles} />
      <BrowserRouter>
        <PageDataContext.Provider value={pageContextState}>
            <Layout menuItems={menuItems}>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/about" exact component={AboutPage} />
                  <Route component={Page404} />
                </Switch>
              </Suspense>
            </Layout>
        </PageDataContext.Provider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
