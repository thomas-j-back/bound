export default class ValidatorService {
  constructor() {}

  validateCreateAccountFields(fields = {}) {
    for (let key in fields) {
      let value = fields[key].value;
      if (key === 'email') {
        fields[key].valid = this._validateEmail(value);
      }
    }
  }
  _validateEmail(email) {
    let result = {
      isValid: false,
      message: 'Valid email not provided',
    };

    if (email.match()) return result;
  }

  _vaidatePassword(password) {}
}
