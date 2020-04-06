import React from 'react';
import PropTypes from 'prop-types';
import Button from '_atoms/button';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import CenterView from '../../../../storybook/stories/CenterView';

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

storiesOf('Button', module)
  // eslint-disable-next-line prettier/prettier
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Neutral', () => (
    <Button title="Login" onPress={action('clicked-emoji')} />
  ))
  .add('Warning', () => (
    <Button
      title="Cancel"
      onPress={action('clicked-emoji')}
      className="danger"
    />
  ))
  .add('Disabled', () => (
    <Button
      title="Accept"
      onPress={action('clicked-emoji')}
      className="disabled"
    />
  ));
