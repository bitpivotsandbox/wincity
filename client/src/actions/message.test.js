import mockStore from 'support/mockStore';
import {
  FETCH_MESSAGE_REQUEST, FETCH_MESSAGE_SUCCESS, FETCH_MESSAGE_FAILURE,
} from 'constants/';
import {
  fetchMessageRequest, fetchMessageSuccess, fetchMessageFailure, fetchMessage,
} from './message';

describe('actions/message', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('creates an action to fetch message', () => {
    const expectedAction = {
      type: FETCH_MESSAGE_REQUEST,
    };
    expect(fetchMessageRequest()).toEqual(expectedAction);
  });

  it('creates an action to store fetched message', () => {
    const message = 'test';
    const expectedAction = {
      type: FETCH_MESSAGE_SUCCESS,
      message,
    };
    expect(fetchMessageSuccess(message)).toEqual(expectedAction);
  });

  it('creates an action to store error message', () => {
    const error = 'error';
    const expectedAction = {
      type: FETCH_MESSAGE_FAILURE,
      error,
    };
    expect(fetchMessageFailure(error)).toEqual(expectedAction);
  });

  it('stores message when API fetch succeeds', () => {
    const payload = { message: 'test' };
    const apiMock = fetch.mockResponse(JSON.stringify(payload));
    const store = mockStore({});
    const expectedActions = [
      fetchMessageRequest(),
      fetchMessageSuccess(payload.message),
    ];

    store.dispatch(fetchMessage()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(apiMock).toHaveBeenCalledWith('api/test');
    });
  });
});
