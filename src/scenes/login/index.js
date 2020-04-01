import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import ButtonInput from '_atoms/button';
const LoginScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>Screen: Login</Text>
    <ButtonInput className="primary">Hello</ButtonInput>
    <TouchableHighlight onPress={() => navigation.navigate('Home')}>
      <Text>Go to home</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default LoginScreen;
