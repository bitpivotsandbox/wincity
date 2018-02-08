import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import reducer from 'reducers/';

export const history = createBrowserHistory();

export function configureStore() {
  const reducers = connectRouter(history)(reducer);
  const middlewares = applyMiddleware(
    routerMiddleware(history),
    thunk,
  );
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    composeEnhancers(middlewares),
  );

  return store;
}
