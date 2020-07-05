import React from 'react';

import { renderWithRouter } from 'services/test-utils';

import Home from '../Home';

describe('Home page', () => {
  test('Home page renders', () => {
    renderWithRouter(<Home />);
  });
});
