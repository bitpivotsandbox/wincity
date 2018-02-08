import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';

describe('Welcome', () => {
  it('renders a welcome message', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper.text()).toContain('Test');
  });
});
