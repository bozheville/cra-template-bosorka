import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Pagination from '../Pagination';

describe('Pagination component', () => {
  const defaultProps = {
    page: 1,
    pageSize: 10,
    limit: 100,
    onChange: jest.fn()
  };

  let wrapper = null as ShallowWrapper<any> | null;

  beforeEach(() => {
    wrapper = shallow(<Pagination
      {...defaultProps}
    />);
  });

  afterEach(() => {
    wrapper?.unmount();
    wrapper = null;
  });

  test('Pagination calculatets pages count correctly', () => {
    expect(wrapper?.find('Button').at(3).text()).toBe('10');
    expect(wrapper?.find('Button').at(4).text()).toBe('next');
  });

  test('Pagination renders buttons correctly', () => {
    wrapper?.setProps({
      page: 8,
      limit: 205,
    });

    expect(wrapper?.find('Button').at(0).text()).toBe('prev');
    expect(wrapper?.find('Button').at(1).text()).toBe('1');
    expect(wrapper?.find('Button').at(2).text()).toBe('6');
    expect(wrapper?.find('Button').at(3).text()).toBe('7');
    expect(wrapper?.find('Button').at(4).text()).toBe('8');
    expect(wrapper?.find('Button').at(5).text()).toBe('9');
    expect(wrapper?.find('Button').at(6).text()).toBe('10');
    expect(wrapper?.find('Button').at(7).text()).toBe('21');
    expect(wrapper?.find('Button').at(8).text()).toBe('next');
  });

  test('Pagination change event is called on click', () => {
    const onChange = jest.fn();
    wrapper?.setProps({ onChange });

    wrapper?.find('Button').at(2).simulate('click');

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(3);
  });
});
