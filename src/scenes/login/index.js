import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import Button from '_atoms/button';
const LoginScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>Screen: Login</Text>
    <Button title="Help" className="primary" />
    <TouchableHighlight onPress={() => navigation.navigate('Home')}>
      <Text>Go to home</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default LoginScreen;
