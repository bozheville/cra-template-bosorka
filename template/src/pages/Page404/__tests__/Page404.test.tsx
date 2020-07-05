import React from 'react';

import { renderWithRouter } from 'services/test-utils';

import Page404 from '../Page404';

describe('Page404 page', () => {
  test('Page404 page renders', () => {
    renderWithRouter(<Page404 />);
  });
});
