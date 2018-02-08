import PropTypes from 'prop-types';

export default function testPropTypes(options) {
  const { propTypes, reducer } = options;
  const defaultState = reducer(undefined, {});
  PropTypes.checkPropTypes(
    { store: propTypes },
    { store: defaultState },
    'prop',
    'reducer',
  );
}
