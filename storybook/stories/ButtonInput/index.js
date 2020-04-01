import React from 'react';
import PropTypes from 'prop-types';
import ButtonInput from '_atoms/button';

export default ButtonInput;

ButtonInput.defaultProps = {
  children: 'SomeLabel',
  onPress: null,
  className: 'primary',
};

ButtonInput.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func,
  className: PropTypes.string,
};
