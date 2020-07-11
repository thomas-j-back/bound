export default class ValidatorService {
  constructor() {
    this.emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
    this.passwordRegex = /@/g;
  }

  /**validate the current criteria given */
  validateFields(fields = {}) {
    //Parse object with validation criteria
    for (let key in fields) {
      let field = fields[key];
      if (key === 'email') {
        fields[key] = this._validateEmail(field);
      }
      if (key === 'password') {
        fields[key] = this._validatePassword(field);
      }
    }
    return fields;
  }

  /**
   *Validates submission for email
   * @param {field_object} email
   */
  _validateEmail(email) {
    let value = email.value;
    let messages = [];
    try {
      value.match(this.emailRegex) ? messages.push('Invalid email given') : '';
    } catch (e) {
      console.error('Invalid value for email input', e);
    }
    email.result = messages;
    return email;
  }

  /**Validates password entry */
  _validatePassword(password) {
    //Ensure password has passes character criteria
    let value = password.value;
    let messages = [];

    //Validate password through criteria
    try {
      value.match(this.passwordRegex)
        ? messages.push('Password must include...')
        : '';

      if (password.confirm_password) {
        value === password.confirm_password
          ? ''
          : messages.push('Passwords do not match');
      }
    } catch (e) {
      console.error('Invalid format for password input', e);
    }
    //Compare both passwords
    password.result = messages;
    return password;
  }
}
