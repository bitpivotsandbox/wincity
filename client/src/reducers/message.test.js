import testPropTypes from 'support/testPropTypes';
import {
  fetchMessageRequest, fetchMessageSuccess, fetchMessageFailure,
} from 'actions/message';
import reducer, { propTypes } from './message';

const defaultState = {
  message: 'Loading...',
  isFetching: false,
  isFetched: false,
  error: null,
};

describe('reducers/message', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  it('exports correct propTypes', () => {
    testPropTypes({ propTypes, reducer });
  });

  it('handles FETCH_MESSAGE_REQUEST', () => {
    const expectedState = {
      ...defaultState,
      isFetching: true,
    };
    const action = reducer(defaultState, fetchMessageRequest());
    expect(action).toEqual(expectedState);
  });

  it('handles FETCH_MESSAGE_SUCCESS', () => {
    const message = 'test';
    const expectedState = {
      ...defaultState,
      isFetched: true,
      message,
    };
    const action = reducer(defaultState, fetchMessageSuccess(message));
    expect(action).toEqual(expectedState);
  });

  it('handles FETCH_MESSAGE_FAILURE', () => {
    const error = 'error';
    const expectedState = {
      ...defaultState,
      error,
    };
    const action = reducer(defaultState, fetchMessageFailure(error));
    expect(action).toEqual(expectedState);
  });
});
