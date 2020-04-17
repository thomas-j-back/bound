import React from 'react';
import {CREATE_ACCOUNT, EXISTING_ACCOUNT} from '_utils/consts';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableHighlight,
  View,
} from 'react-native';

import Button from '_atoms/button';
import InputField from '_atoms/input-field';

import {t} from 'react-native-tailwindcss';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      login_flow: '',
    };
  }
  /**Direct to password/email/account recovery scene or webview*/
  triggerAccountRecovery() {}

  /**Returns different form states for account creation */
  renderFormFields() {
    let fields = '';
    switch (this.state.login_flow) {
      case CREATE_ACCOUNT:
        fields = (
          <View style={[t.p4, t.justifyCenter]}>
            <Text style={[t.text4xl, t.textCenter, t.fontSen]}>
              Create Account
            </Text>
            <InputField
              label="Email"
              onChangeText={text => {}}
              className={'label'}
            />
            <InputField
              label="Password"
              secureTextEntry
              onChangeText={text => {}}
              className={'label'}
            />
            <InputField
              label="Confirm Password"
              secureTextEntry
              onChangeText={text => {}}
              className={'label'}
            />
            <Button title="Create" onPress={() => {}} className="primary" />
          </View>
        );
        break;
      case EXISTING_ACCOUNT:
        fields = (
          <View style={[t.p4, t.justifyCenter]}>
            <Text style={[t.text4xl, t.textCenter, t.fontSen]}>Login</Text>
            <InputField
              label="Email"
              onChangeText={text => {}}
              className={'label'}
            />
            <InputField
              label="Password"
              secureTextEntry
              onChangeText={text => {}}
              className={'label'}
            />
            <Button title="Login" onPress={() => {}} className="primary" />
            <TouchableHighlight
              activeOpacity={0.3}
              onPress={() => this.triggerAccountRecovery()}>
              <Text style={[t.textSm, t.fontSen, t.mT4]}>
                Forgot login information?
              </Text>
            </TouchableHighlight>
          </View>
        );
        break;
      default:
        //Render the initial state
        fields = (
          <View style={[t.p4, t.justifyCenter]}>
            <Text style={[t.text4xl, t.textCenter, t.fontSen]}>Bound</Text>
            <Image
              source={require('_assets/images/logo.png')}
              style={[t.h24, t.selfCenter, t.objectContain]}
            />
            <Button
              title="Login"
              onPress={() => this.setState({login_flow: EXISTING_ACCOUNT})}
              className="primary"
            />
            <TouchableHighlight
              activeOpacity={0.3}
              onPress={() => this.setState({login_flow: CREATE_ACCOUNT})}>
              <Text style={[t.textSm, t.fontSen, t.mT4]}>
                Create an account
              </Text>
            </TouchableHighlight>
          </View>
        );
        break;
    }
    return fields;
  }

  render() {
    return <SafeAreaView>{this.renderFormFields()}</SafeAreaView>;
  }
}
