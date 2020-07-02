import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import PageContext from './PageContext';

import { IPageProps } from './types';
import Container from '../Container';

const Page: React.FC<IPageProps> = ({
  children,
  title,
  ...props
}) => {
  const { setTitle } = useContext(PageContext);

  useEffect(() => {
    setTitle(title || '');
  }, [title, setTitle]);

  return (
    <Container {...props}>
      <Helmet>
        <title>{`${title} • ${process.env.REACT_APP_PROJECT_TITLE}`}</title>
      </Helmet>
      {children}
    </Container>
  );
};

Page.displayName = 'Page';

export default Page;
