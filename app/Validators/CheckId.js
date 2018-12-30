const BaseValidator = use('App/Validators/BaseValidator');

class checkId extends BaseValidator {
  get rules() {
    return {
      id: 'required|integer'
    };
  }

  get data() {
    const requestBody = this.ctx.request.all();
    const id = Number(this.ctx.params.id);
    return { ...requestBody, id };
  }
}

module.exports = checkId;
