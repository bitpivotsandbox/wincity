import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

export default function mountComponentWithConnectedRouter(component, context) {
  return mount(
    <Provider store={context.store}>
      <MemoryRouter>
        {component}
      </MemoryRouter>
    </Provider>,
    { context },
  );
}
