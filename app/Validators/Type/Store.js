const BaseValidator = use('App/Validators/BaseValidator');

class Store extends BaseValidator {
  get rules() {
    return {
      title: 'required|min:2|max:20',
      attributes: 'required'
    };
  }
}

module.exports = Store;
