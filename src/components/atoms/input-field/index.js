import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Typography, Spacing, Color} from '_styles';
//Component to take in forms from a field, can be fitted with label or not
export default class InputField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.label}</Text>
        <TextInput />
      </View>
    );
  }
}
