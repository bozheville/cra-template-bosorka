import React from 'react';

import { renderWithRouter, RouterWrapper } from 'services/test-utils';

import Header from '../Header';

const menuItems = [
  {link: '/test', title: 'Test'},
  {link: '/someLink', title: 'Some Link'},
]

describe('Header component', () => {

  test('Renders Header with "Home", "Test", "Some Link" links', () => {
    const { container } = renderWithRouter(<RouterWrapper><Header items={menuItems} /></RouterWrapper>);

    const buttons = container.querySelectorAll('a');

    expect(buttons[0]).toHaveAttribute('href', '/');
    expect(buttons[0]).toHaveTextContent('Home');
    expect(buttons[1]).toHaveAttribute('href', '/test');
    expect(buttons[1]).toHaveTextContent('Test');
    expect(buttons[2]).toHaveAttribute('href', '/someLink');
    expect(buttons[2]).toHaveTextContent('Some Link');
  });

  test('Items prop controlls header menu links', () => {
    const { container } = renderWithRouter(<Header items={[
      {link: '/custom-page', title: 'Custom Page'},
    ]} />);

    const buttons = container.querySelectorAll('a');

    expect(buttons[0]).toHaveAttribute('href', '/');
    expect(buttons[0]).toHaveTextContent('Home');
    expect(buttons[1]).toHaveAttribute('href', '/custom-page');
    expect(buttons[1]).toHaveTextContent('Custom Page');
  });
});
