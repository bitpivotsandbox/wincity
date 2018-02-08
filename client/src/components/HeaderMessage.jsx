import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderMessage(props) {
  const { message } = props;
  return (
    <h1>{message}</h1>
  );
}

HeaderMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
