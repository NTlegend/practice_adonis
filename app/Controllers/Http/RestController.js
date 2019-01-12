/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with rest
 */
class RestController {
  /**
   * Show a list of all models.
   * GET models
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ response }) {
    const model = this.getModelClassName();

    const list = await model.all();

    return response.json(list);
  }

  /**
   * Display a single model.
   * GET models/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, response }) {
    const model = await this.findModel(params);

    if (!model) {
      return response.status(404).json({ error: 'Model is not found' });
    }

    return response.json(model);
  }

  /**
   * Create/save a new model.
   * POST models
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const ModelClass = this.getModelClassName();

    const model = new ModelClass();

    await this.saveModel(request, model);

    return response.json(model);
  }

  /**
   * Update model details.
   * PUT or PATCH models/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const model = await this.findModel(params);

    if (!model) {
      return response.status(404).json({ error: 'Model is not found' });
    }

    await this.saveModel(request, model);

    return response.json(model);
  }

  /**
   * Delete a model with id.
   * DELETE models/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    const model = await this.findModel(params);

    if (!model) {
      return response.status(404).json({ error: 'Model is not found' });
    }

    await model.delete();

    return response.status(204).json({});
  }

  async findModel(params) {
    const model = this.getModelClassName();

    return model.find(params.id);
  }

  async saveModel(request, model) {
    const modelFields = this.getModelFields();

    const post = request.only(modelFields);

    Object.keys(post).forEach(key => {
      model[key] = post[key];
    });

    await model.save();

    return model;
  }

  /**
   *
   * @return {typeof import('@adonisjs/lucid/src/Lucid/Model')}
   * @private
   */
  getModelClassName() {
    return use(this.constructor.model);
  }

  getModelFields() {
    return this.constructor.modelFields;
  }
}

RestController.model = null;
RestController.modelFields = [];

module.exports = RestController;
