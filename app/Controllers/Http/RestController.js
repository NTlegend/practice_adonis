class RestController {
  async index() {
    return this.default('index');
  }

  async create() {
    return this.default('create');
  }

  async view() {
    return this.default('view');
  }

  async update() {
    return this.default('update');
  }

  async delete() {
    return this.default('delete');
  }

  async default(action) {
    return new Promise(resolve => {
      resolve({ model: this.constructor.model, action });
    });
  }
}

RestController.model = null;

module.exports = RestController;
