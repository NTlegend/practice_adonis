const BaseValidator = use('App/Validators/BaseValidator');

class AttributeStore extends BaseValidator {
  get rules() {
    return {
      title: 'required|min:2|max:30',
      typeId: 'required|integer|exist:types'
    };
  }
}

module.exports = AttributeStore;
