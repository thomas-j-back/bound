import firebase from 'react-native-firebase';

export default class FirebaseService {
  constructor() {}

  signIn(credential) {
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(res => {})
      .catch(e => {
        console.log(e);
      });
  }
}
