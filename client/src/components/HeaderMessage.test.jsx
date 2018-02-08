import React from 'react';
import { shallow } from 'enzyme';
import HeaderMessage from './HeaderMessage';

describe('HeaderMessage', () => {
  it('renders a header message', () => {
    const message = 'Test message';
    const header = shallow(<HeaderMessage message={message} />);
    expect(header.text()).toBe(message);
  });
});
