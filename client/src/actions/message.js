import {
  FETCH_MESSAGE_REQUEST, FETCH_MESSAGE_SUCCESS, FETCH_MESSAGE_FAILURE,
} from 'constants/';
import generateActionCreator from 'lib/generateActionCreator';

export const fetchMessageRequest = generateActionCreator(FETCH_MESSAGE_REQUEST);
export const fetchMessageSuccess = generateActionCreator(FETCH_MESSAGE_SUCCESS, 'message');
export const fetchMessageFailure = generateActionCreator(FETCH_MESSAGE_FAILURE, 'error');

export function fetchMessage() {
  return async (dispatch) => {
    dispatch(fetchMessageRequest());

    try {
      const response = await fetch('api/test');
      const json = await response.json();
      dispatch(fetchMessageSuccess(json.message));
    }
    catch (e) {
      dispatch(fetchMessageFailure(e.message));
    }
  };
}
