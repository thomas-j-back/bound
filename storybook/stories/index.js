import React from 'react';
import {Text} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import Button from './Button';
import ButtonInput from './ButtonInput';
import CenterView from './CenterView';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('ButtonInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Neutral State', () => {
    <ButtonInput className="primary" onPress={action('Hello There')}>
      Hello Friends
    </ButtonInput>;
  })
  .add('Danger State', () => {
    <ButtonInput className="danger" onPress={action('Hello There')}>
      No
    </ButtonInput>;
  });

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
