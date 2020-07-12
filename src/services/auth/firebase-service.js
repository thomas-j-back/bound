import auth from '@react-native-firebase/auth';

export default class FirebaseService {
  constructor() {
    this.auth = auth();
  }

  signIn(credential) {
    this.auth
      .signInWithCredential(credential)
      .then(res => {})
      .catch(e => {
        console.log(e);
      });
  }

  /**
   *  opts object must contain email and password for account
   * @param {*} opts
   */
  createAccount(opts = {}) {
    if (!opts || !opts.email || !opts.password) {
      console.error('No email and password provided for account creation');
      return;
    }
    this.auth
      .createUserWithEmailAndPassword(opts.email, opts.password)
      .then(() => {
        alert('Account created!');
      })
      .catch(e => {
        console.error(e);
      });
  }
}
