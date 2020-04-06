import React, {Component} from 'react';
import {TouchableHighlight, Text} from 'react-native';
import {Spacing, Mixins, Colors} from '../../../styles/';
export default class Button extends Component {
  //General purpose button
  constructor(props) {
    super(props);
    this.className = this.props.className;
    this.state = {
      style: [],
      underlayColor: Colors.BASE,
      executing: false,
    };
  }

  componentWillMount() {
    this.generateClassStyle();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.className !== this.props.className) {
      this.generateClassStyle();
    }
  }

  generateClassStyle() {
    //generate styles based on button state/type
    let style = {};
    let textStyle = {};
    let underlayColor = Colors.PRIMARY;
    style = {
      ...style,
      ...Mixins.padding(Spacing.SCALE_4),
      //...Mixins.margin(Spacing.SCALE_4),
    };
    textStyle.color = Colors.WHITE;
    style.width = '100%';
    style.borderRadius = 5;
    style.alignItems = 'center';
    style.justifyContent = 'center';
    switch (this.className) {
      case 'primary':
        style.backgroundColor = Colors.PRIMARY;
        break;
      case 'danger':
        style.backgroundColor = Colors.WARNING;
        break;
      case 'disabled':
        style.backgroundColor = Colors.GRAY_LIGHT;
        textStyle.color = Colors.GRAY_MEDIUM;
    }
    this.setState({underlayColor: underlayColor});
    this.setState({style: style});
    this.setState({textStyle: textStyle});
  }

  render() {
    // alert(JSON.stringify(this.state.style))
    return (
      <TouchableHighlight
        underlayColor={this.state.underlayColor}
        activeOpacity={this.props.className === 'disabled' ? 1 : 0.6}
        style={this.state.style}
        onPress={
          this.props.className !== 'disabled' && this.props.onPress
            ? this.props.onPress
            : () => {}
        }>
        <Text style={this.state.textStyle}>{this.props.title}</Text>
      </TouchableHighlight>
    );
  }
}
