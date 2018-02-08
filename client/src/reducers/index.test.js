import { createStore } from 'redux';
import reducer from './index';

describe('Root Reducer', () => {
  it('contains child reducers with default state', () => {
    const store = createStore(reducer);
    expect(store.getState()).toEqual(reducer(undefined, {}));
  });
});
