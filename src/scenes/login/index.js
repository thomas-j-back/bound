import React from 'react';
import {CREATE_ACCOUNT, EXISTING_ACCOUNT} from '_utils/consts';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableHighlight,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import Button from '_atoms/button';
import InputField from '_atoms/input-field';

import {t} from 'react-native-tailwindcss';

import {ValidatorService} from '_services';
import {FirebaseService} from '_services';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      login_flow: '',
      email: {
        value: '',
        result: [],
      },
      password: {
        value: '',
        result: [],
      },
      confirm_password: {},
      valid: true,
    };
    this.validatorService = new ValidatorService();
    this.FirebaseService = new FirebaseService();
  }
  /**Direct to password/email/account recovery scene or webview*/
  triggerAccountRecovery() {}

  /**Submits account creation */
  onSubmit() {
    let fields = this._getFields();
    fields = this.validatorService.validateFields(fields);
    //set the returned validation and proceed if valid
    alert(JSON.stringify(fields));

    //TODO Set any errors in the form on return

    //After that depending on the flow the  continue
    for (let key in fields) {
      this.setState({key: fields[key]});
      if (fields[key].message) {
        this.setState({valid: false});
      }
    }
  }

  _getFields() {
    let fields = {
      email: this.state.email,
      password: this.state.password,
    };
    if (this.state.login_flow === CREATE_ACCOUNT) {
      fields.password.confirm_password = this.state.confirm_password.value;
    }
    return fields;
  }

  /**Returns different form states for account creation */
  renderFormFields() {
    let fields = '';
    switch (this.state.login_flow) {
      case CREATE_ACCOUNT:
        fields = (
          <View style={[t.p4, t.justifyCenter]}>
            <View>
              <TouchableHighlight
                onPress={() => this.setState({login_flow: ''})}>
                <FontAwesomeIcon size={24} icon="arrow-left" />
              </TouchableHighlight>
              <Text style={[t.text4xl, t.textCenter, t.fontSen]}>
                Create Account
              </Text>
            </View>

            <InputField
              name="email"
              label="Email"
              errors={this.state.email.result}
              onChangeText={text => {
                let email = this.state.email;
                email.value = text;
                this.setState({email: email});
              }}
              className={'label'}
            />
            <InputField
              name="password"
              label="Password"
              errors={this.state.password.result}
              secureTextEntry
              onChangeText={text => {
                let password = this.state.password;
                password.value = text;
                this.setState({password: password});
              }}
              className={'label'}
            />
            <InputField
              name="confirm_password"
              label="Confirm Password"
              secureTextEntry
              onChangeText={text => {
                this.setState({confirm_password: {value: text}});
              }}
              className={'label'}
            />
            <Button
              title="Create"
              onPress={() => {
                this.onSubmit();
              }}
              className="primary"
            />
          </View>
        );
        break;
      case EXISTING_ACCOUNT:
        fields = (
          <View style={[t.p4, t.justifyCenter]}>
            <View>
              <TouchableHighlight
                onPress={() => this.setState({login_flow: ''})}>
                <FontAwesomeIcon size={24} icon="arrow-left" />
              </TouchableHighlight>
              <Text style={[t.text4xl, t.textCenter, t.fontSen]}>Login</Text>
            </View>
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
            <Button
              title="Login"
              onPress={() => {
                this.onSubmit();
              }}
              className="primary"
            />
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
