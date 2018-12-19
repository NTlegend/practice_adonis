const createMessagesObj = use('App/Helpers/validation');

class BaseValidator {
  get validateAll() {
    return true;
  }

  get messages() {
    return createMessagesObj(this.rules);
  }
}

module.exports = BaseValidator;
