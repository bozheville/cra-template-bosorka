import React, { Suspense, useMemo, useState } from 'react';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Global } from '@emotion/core';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Layout from 'components/Layout';
import PageDataContext from 'components/Page/PageContext';
import customTheme from 'services/theme';
import globalStyles from 'styled/global';

const Page404 = React.lazy(() => import('pages/Page404'));

interface IApp {}

const App: React.FC<IApp> = () => {
  const [title, setTitle] = useState('');

  const pageContextState = useMemo(() => ({ title, setTitle }), [title, setTitle]);
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Global styles={globalStyles} />
      <Router>
        <PageDataContext.Provider value={pageContextState}>
            <Layout>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route component={Page404} />
                </Switch>
              </Suspense>
            </Layout>
        </PageDataContext.Provider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
