import React from 'react';

import { render } from 'services/test-utils';

import Page from '../Page';

describe('Page component', () => {
  test('Page component renders and updates a page title', async () => {
    const { container } = render(<Page title="Test page" />);

    await new Promise(resolve => setTimeout(resolve, 100));

    expect(document.title).toEqual('Test page • ' + process.env.REACT_APP_PROJECT_TITLE);
  });
});
