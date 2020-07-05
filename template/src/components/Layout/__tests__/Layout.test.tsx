import React from 'react';

import { renderWithRouter } from 'services/test-utils';

import Layout from '../Layout';

describe('Layout component', () => {
  test('Layout component renders', () => {
    renderWithRouter(<Layout menuItems={[]} />)
  });
});
