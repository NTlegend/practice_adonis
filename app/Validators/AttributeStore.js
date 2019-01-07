const BaseValidator = use('App/Validators/BaseValidator');

class AttributeStore extends BaseValidator {
  get rules() {
    return {
      title: 'required|min:2|max:20'
    };
  }
}

module.exports = AttributeStore;
