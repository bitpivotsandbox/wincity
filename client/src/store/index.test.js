import { configureStore } from './index';

describe('Store', () => {
  it('configures a store with router', () => {
    const store = configureStore();
    expect(store).toBeDefined();
    expect(store.getState().router).toBeDefined();
  });
});
