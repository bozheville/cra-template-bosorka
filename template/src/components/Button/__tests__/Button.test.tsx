import React from 'react';

import { render } from 'services/test-utils';

import Button from '../Button';

describe('Button component', () => {
  test('Button renders a "button" tag', () => {
    const { container } = render(<Button>Click me</Button>);
    const buttons = container.querySelectorAll('button');

    expect(buttons).toHaveLength(1);
    const button = buttons[0];

    expect(button).toHaveTextContent('Click me');
  });

  test('Button as link renders an "a" tag', () => {
    const { container } = render(<Button as="a" href="http://example.com">Go</Button>);
    const buttons = container.querySelectorAll('button');
    const links = container.querySelectorAll('a');

    expect(buttons).toHaveLength(0);
    expect(links).toHaveLength(1);
    const link = links[0];

    expect(link).toHaveTextContent('Go');
    expect(link).toHaveAttribute('href', 'http://example.com');
  });
});
