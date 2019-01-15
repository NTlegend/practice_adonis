class ProductController {
  async index({ response }) {
    response.status(200).json({
      message: 'Show products'
    });
  }

  async create({ request, response }) {
    response.status(200).json({
      message: 'Create product',
      data: request.body
    });
  }

  async show({ response, params: { id } }) {
    response.status(200).json({
      message: `Show product: ${id}`
    });
  }

  async update({ request, response, params: { id } }) {
    response.status(200).json({
      message: `Update product: ${id}`,
      data: request.body
    });
  }

  async delete({ request, response, params: { id } }) {
    response.status(200).json({
      message: `Delete product: ${id}`,
      data: request.body
    });
  }
}

module.exports = ProductController;
