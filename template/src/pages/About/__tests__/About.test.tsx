import React from 'react';

import { renderWithRouter } from 'services/test-utils';

import About from '../About';

describe('About page', () => {
  test('About page renders', () => {
    renderWithRouter(<About />);
  });
});
