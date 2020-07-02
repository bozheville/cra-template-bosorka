import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IPage404Props } from './types';
import {
  Container,
  StyledPage,
  PageInfo,
} from './styledPage404';

const Page404: React.FC<IPage404Props> = () => {
  const { t } = useTranslation('pages');

  return (
    <Container>
      <StyledPage title={t('page404.title')}>
        <PageInfo>
          <h1>404</h1>
          <h2>content missing</h2>
          <p>What options do you have?</p>
          <ol>
            <li>
              You can <Link to="/">go to the home page</Link> and start your journey over
            </li>
            <li>Do nothing. Just sit back and relax</li>
            <li>Is doing nothing boring? <a href="https://www.mindful.org/audio-resources-for-mindfulness-meditation/">Meditate.</a></li>
          </ol>
        </PageInfo>
      </StyledPage>
    </Container>
  );
};

Page404.displayName = 'Page404';

export default Page404;
