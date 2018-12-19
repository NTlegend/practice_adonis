const BaseValidator = use('App/Validators/BaseValidator');

class Registration extends BaseValidator {
  get sanitizationRules() {
    return {
      email: 'normalize_email|trim'
    };
  }

  get rules() {
    return {
      email: 'required|email|unique:users',
      password: 'required|min:6|max:25|confirmed'
    };
  }
}

module.exports = Registration;
