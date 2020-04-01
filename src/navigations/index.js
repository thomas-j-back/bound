import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

//Determine auth status
let initRoute = 'App';
switch (firebase.auth().currentUser) {
  case null:
    initRoute = 'Auth';
    break;
  default:
    break;
}

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: initRoute,
  },
);

export default createAppContainer(RootNavigator);
