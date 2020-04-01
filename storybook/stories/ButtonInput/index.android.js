import React from 'react';
import PropTypes from 'prop-types';
import ButtonInput from '_atoms/button';

export default ButtonInput;

ButtonInput.defaultProps = {
  children: null,
  onPress: () => {},
};

ButtonInput.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
