/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Typography, Spacing, Color} from '_styles';
//Component to take in forms from a field, can be fitted with label or not
export default class InputField extends React.Component {
  constructor(props) {
    super(props);

    //Create stylings based on className property
  }

  generateClassStyles() {
    switch (this.props.className) {
    }
  }

  /**
   * Only return text if label provided
   */
  getLabel() {
    if (this.props.label) {
      return <Text>{this.props.label}</Text>;
    }
  }

  /**
   * Animate label on press
   */
  onFocus() {}

  render() {
    return (
      <View>
        {this.getLabel()}
        <TextInput
          placeholder={this.props.placeholder}
          onChangeText={text => this.props.onChangeText(text)}
        />
      </View>
    );
  }
}
