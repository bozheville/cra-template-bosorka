import React from 'react';

import { render } from 'services/test-utils';

import Container from '../Container';

describe('Container component', () => {
  test('Container component renders', () => {
    render(<Container />)
  });
});
