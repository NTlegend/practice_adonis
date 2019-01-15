class TypeController {
  async index({ response }) {
    response.status(200).json({
      message: 'Types index'
    });
  }
}

module.exports = TypeController;
