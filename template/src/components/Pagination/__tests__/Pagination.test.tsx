import React from 'react';

import { render, getByText, fireEvent } from 'services/test-utils';

import Pagination from '../Pagination';

describe('Pagination component', () => {
  const defaultProps = {
    page: 1,
    pageSize: 10,
    limit: 100,
    onChange: jest.fn(),
  };

  test('Pagination calculatets pages count correctly', () => {
    const { container } = render(<Pagination {...defaultProps} />);
    const buttons = container.querySelectorAll('button');

    expect(buttons[0]).toHaveTextContent('1');
    expect(buttons[1]).toHaveTextContent('2');
    expect(buttons[2]).toHaveTextContent('3');
    expect(buttons[3]).toHaveTextContent('10');
    expect(buttons[4]).toHaveTextContent('next');
  });

  test('Pagination renders buttons correctly', () => {
    const { container } = render(
      <Pagination
        {...defaultProps}
        page={8}
        limit={205}
      />
    );

    const buttons = container.querySelectorAll('button');
    expect(buttons[0]).toHaveTextContent('prev');
    expect(buttons[1]).toHaveTextContent('1');
    expect(buttons[2]).toHaveTextContent('6');
    expect(buttons[3]).toHaveTextContent('7');
    expect(buttons[4]).toHaveTextContent('8');
    expect(buttons[5]).toHaveTextContent('9');
    expect(buttons[6]).toHaveTextContent('10');
    expect(buttons[7]).toHaveTextContent('21');
    expect(buttons[8]).toHaveTextContent('next');
  });

  test('Pagination change event is called on click', () => {
    const onChange = jest.fn();

    const { container } = render(
      <Pagination
        {...defaultProps}
        onChange={onChange}
      />
    );

    fireEvent(
      getByText(container, '3'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(3);
  });
});
