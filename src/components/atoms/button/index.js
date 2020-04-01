import React, {Component} from 'react';
import {Button} from 'react-native';
import {Spacing, Mixins, Colors} from '../../../styles/';
export default class ButtonInput extends Component {
  constructor(props) {
    super(props);
    this.className = this.props.className;
  }

  generateClassStyle() {
    //generate styles based on button state/type
    let styles = {};
    styles.margin = Mixins.margin(Spacing.BASE);
    styles.padding = Mixins.padding(Spacing.BASE);
    styles.color = Colors.WHITE;
    switch (this.className) {
      case 'primary':
        styles.backgroundColor = Colors.PRIMARY;
        break;
      case 'danger':
        styles.backgroundColor = Colors.WARNING;
        break;
    }
    return styles;
  }
  render() {
    return (
      <Button
        title={this.props.children}
        style={[this.generateClassStyle(), this.props.style]}
        onPress={this.props.onPress ? this.props.onPress : () => {}}
      />
    );
  }
}
