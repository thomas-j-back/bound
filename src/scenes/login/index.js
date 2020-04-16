import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableHighlight,
  View,
} from 'react-native';
import Button from '_atoms/button';
import {t} from 'react-native-tailwindcss';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }
  createAccount() {
    return '';
  }
  render() {
    return (
      <SafeAreaView>
        <View style={[t.p4, t.justifyCenter]}>
          <Text style={[t.text6xl, t.textCenter, t.fontSen]}>Bound</Text>
          <Image
            source={require('_assets/images/logo.png')}
            style={[t.h24, t.selfCenter, t.objectContain]}
          />
          <Button
            title="Login"
            onPress={() => this.navigation.navigate('Home')}
            className="primary"
          />
          <TouchableHighlight
            activeOpacity={0.3}
            onPress={this.createAccount()}>
            <Text style={[t.textSm, t.fontSen, t.mT4]}>Create an account</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}
