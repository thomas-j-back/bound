import React from 'react';
import PropTypes from 'prop-types';
import InputField from '_atoms/input-field';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import CenterView from '../../../../storybook/stories/CenterView';

export default InputField;

InputField.defaultProps = {
  onChange: null,
  className: 'primary',
  label: 'Label',
};

InputField.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
};

storiesOf('Input', module)
  // eslint-disable-next-line prettier/prettier
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Input With Label', () => (
    <InputField
      label="User"
      onChangeText={(text) => {
        alert(text);
      }}
      className={'label'}
    />
  ));
