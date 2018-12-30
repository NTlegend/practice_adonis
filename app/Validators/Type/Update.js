const BaseValidator = use('App/Validators/BaseValidator');

class Update extends BaseValidator {
  get rules() {
    return {
      title: 'min:2|max:20'
    };
  }

  get data() {
    const requestBody = this.ctx.request.all();
    const id = Number(this.ctx.params.id);
    return { ...requestBody, id };
  }
}

module.exports = Update;
