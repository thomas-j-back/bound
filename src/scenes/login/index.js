import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableHighlight,
  View,
} from 'react-native';
import Button from '_atoms/button';
import {Mixins, Spacing, Typography} from '_styles';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.style = {
      ...Mixins.padding(Spacing.SCALE_12),
    };
    this.headingStyle = {
      ...Typography.FONT_BOLD,
      fontSize: Typography.FONT_SIZE_XL,
      textAlign: 'center',
    };

    //IMAGE STYLES//
    this.imageStyle = {
      alignSelf: 'center',
      width: 100,
      height: 100,
    };

    this.promptCreateStyle = {
      fontSize: Typography.FONT_SIZE_12,
      ...Mixins.padding(Spacing.SCALE_12),
    };
  }
  createAccount() {
    return '';
  }
  render() {
    return (
      <SafeAreaView>
        <View style={this.style}>
          <Text style={this.headingStyle}>Bound</Text>
          <Image
            source={require('_assets/images/logo.png')}
            style={this.imageStyle}
          />
          <Button
            title="Login"
            onPress={() => this.navigation.navigate('Home')}
            className="primary"
          />
          <TouchableHighlight
            activeOpacity={0.3}
            onPress={this.createAccount()}>
            <Text style={this.promptCreateStyle}>Create an account</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}
