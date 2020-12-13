import React from 'react';
import { useTranslation } from 'react-i18next';

import Page from 'components/Page';
import { IAboutProps } from './types';
import { Heading } from '@chakra-ui/react';

const About: React.FC<IAboutProps> = () => {
  const { t } = useTranslation('pages');

  return (
    <Page title={t('about.title')}>
      <Heading mb="2rem" as="h1" size="xl">{t('about.title')}</Heading>
    </Page>
  );
};

About.displayName = 'About';

export default About;
