/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Typography, Spacing, Color} from '_styles';
import {t} from 'react-native-tailwindcss';
//Component to take in forms from a field, can be fitted with label or not
export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.error = props.error || [];
    this.state.style = [t.mB4, t.textBase, t.fontSen];
    //Create stylings based on className property
  }

  componentWillReceiveProps(nextProps) {
    let error = nextProps.error;
    if (!error) {
      error = [];
    }
    this.setState({error: error});
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
      return (
        <Text style={[t.mB4, t.fontSen, t.textSm]}>{this.props.label}</Text>
      );
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
        {this.state.error.forEach(message => {
          return (
            <Text style={[t.mB4, t.fontSen, t.textSm, t.tR400]}>{message}</Text>
          );
        })}
        <TextInput style={this.state.style} {...this.props} />
      </View>
    );
  }
}
