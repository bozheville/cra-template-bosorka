import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Box, Grid, Heading, Image, Text } from '@chakra-ui/core';

import Button from 'components/Button';
import Page from 'components/Page';

import micdropSvg from './undraw_mic_drop_uuyg.svg';
import a11ySvg from './undraw_pedestrian_crossing_l6jv.svg';
import mobileSvg from './undraw_home_screen_4n7s.svg';
import headSvg from './undraw_completed_steps_yurw.svg';

import PromoItem from './PromoItem';
import { IHomeProps } from './types';

const mainLink = '/404';

const Home: React.FC<IHomeProps> = () => {
  const { t } = useTranslation('pages');

  return (
    <Page title={t('home.title')}>
      <Grid
        gridTemplateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)'
        ]}
        gap="1em"
        mt="3rem"
        mb="2rem"
      >
        <Box textAlign={['center',null,'left', null]}>
          <Heading
            as="h1"
            size="2xl"
            mb="2rem"
          >
            {t('home.title')}
          </Heading>
          <Text fontSize="xl">
            {t('home.description')}
          </Text>
          <Button
            as={Link}
            to={mainLink}
            variantColor="purple"
            size="lg"
            mt="1em"
          >
            {t('home.moreButton')}
          </Button>
        </Box>
        <Box
          order={[-1,-1,0,0]}
          h="16rem"
        >
          <Image
            maxH="100%"
            m={[
              "0 auto",
              null,
              "0",
              null
            ]}
            src={headSvg}
            alt={process.env.REACT_APP_PROJECT_TITLE}
          />
        </Box>
      </Grid>
      <Heading
        as ="h2"
        size="xl"
        textAlign="center"
        mb="2rem"
      >
        {t('home.keyBenefits.title')}
      </Heading>
      <Grid
        gridTemplateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(3, 1fr)'
        ]}
        gap="1em"
        mb="2rem"
      >
        <PromoItem
          title={t('home.keyBenefits.simplicity.title')}
          description={t('home.keyBenefits.simplicity.description')}
          actionName={t('home.keyBenefits.simplicity.actionName')}
          image={micdropSvg}
        />
        <PromoItem
          title={t('home.keyBenefits.responsiveness.title')}
          description={t('home.keyBenefits.responsiveness.description')}
          actionName={t('home.keyBenefits.responsiveness.actionName')}
          image={mobileSvg}
        />
        <PromoItem
          title={t('home.keyBenefits.a11y.title')}
          description={t('home.keyBenefits.a11y.description')}
          actionName={t('home.keyBenefits.a11y.actionName')}
          link="https://a11yproject.com/"
          image={a11ySvg}
        />
      </Grid>
      <Box textAlign="center">
        <Heading
          as ="h2"
          size="xl"
        >
          {t('home.bottomSection.heading')}
        </Heading>
        <Button
          as={Link}
          to={mainLink}
          variantColor="purple"
          size="lg"
          mt="1em"
        >
          {t('home.bottomSection.button')}
        </Button>
      </Box>
    </Page>
  );
};

Home.displayName = 'Home';

export default Home;
