const Type = use('App/Models/Type');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class TypeController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request }) {
    const { name } = request.all();
    return Type.findByName(name);;
  }

  async delete({ params, response }) {
    const { id } = params;

    const type = await Type.findOrFail(id);
    await type.delete();

    return response.json({msg: 'Ok'});
  }
}

module.exports = TypeController;
