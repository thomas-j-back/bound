import React from 'react';
import PropTypes from 'prop-types';
import Button from '_atoms/button';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

export default Button;

Button.defaultProps = {
  children: 'SomeLabel',
  onPress: null,
  className: 'primary',
};

Button.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func,
  className: PropTypes.string,
};
