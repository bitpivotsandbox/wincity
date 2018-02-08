import PropTypes from 'prop-types';
import {
  FETCH_MESSAGE_REQUEST, FETCH_MESSAGE_SUCCESS, FETCH_MESSAGE_FAILURE,
} from 'constants/';

const defaultState = {
  message: 'Loading...',
  isFetching: false,
  isFetched: false,
  error: null,
};

const propTypes = PropTypes.shape({
  message: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFetched: PropTypes.bool.isRequired,
  error: PropTypes.string,
});

function message(state = defaultState, action) {
  switch (action.type) {
    case FETCH_MESSAGE_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
      };

    case FETCH_MESSAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        message: action.message,
      };

    case FETCH_MESSAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        error: action.error,
      };

    default:
      return state;
  }
}

export { message as default, defaultState, propTypes };
