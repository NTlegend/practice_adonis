class RestController {
  async index() {
    return this.default();
  }

  async create() {
    return this.default();
  }

  async view() {
    return this.default();
  }

  async update() {
    return this.default();
  }

  async delete() {
    return this.default();
  }

  async default() {
    return new Promise(resolve => {
      resolve({ model: this.constructor.model });
    });
  }
}

RestController.model = null;

module.exports = RestController;
