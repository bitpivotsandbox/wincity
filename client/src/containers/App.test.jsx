import React from 'react';
import mockStore from 'support/mockStore';
import * as messageActions from 'actions/message';
import { defaultState } from 'reducers/message';
import HeaderMessage from 'components/HeaderMessage';
import mountComponentWithConnectedRouter from 'support/mountComponentWithConnectedRouter';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders a container with HeaderMessage', () => {
    const store = mockStore({ message: defaultState });
    const context = { store };
    const wrapper = mountComponentWithConnectedRouter(<App />, context);
    expect(wrapper.find(HeaderMessage)).toHaveLength(1);
  });

  it('passes message to HeaderMessage', () => {
    const store = mockStore({ message: defaultState });
    const context = { store };
    const wrapper = mountComponentWithConnectedRouter(<App />, context);
    const header = wrapper.find(HeaderMessage);
    expect(header.prop('message')).toEqual(defaultState.message);
  });

  it('fetches message on mount', () => {
    const store = mockStore({ message: defaultState });
    const context = { store };
    jest.spyOn(messageActions, 'fetchMessage');
    mountComponentWithConnectedRouter(<App />, context);
    expect(messageActions.fetchMessage).toHaveBeenCalled();
  });

  it('does not fetch messages on mount when already fetched', () => {
    const store = mockStore({
      message: {
        ...defaultState,
        isFetched: true,
      },
    });
    const context = { store };
    jest.spyOn(messageActions, 'fetchMessage');
    mountComponentWithConnectedRouter(<App />, context);
    expect(messageActions.fetchMessage).not.toHaveBeenCalled();
  });
});
