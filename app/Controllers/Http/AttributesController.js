const RestController = require('./RestController');

const Attribute = use('App/Models/Attribute');
const Product = use('App/Models/Product');
const ProductAttributes = use('App/Models/ProductAttributes');
const Type = use('App/Models/Type');

class AttributesController extends RestController {
  async index({ response }) {
    const list = await Attribute.query()
      .with('type')
      .fetch();

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
    const post = request.only(['product_id', 'type_id', 'name', 'value']);

    await Product.findOrFail(post.product_id);
    await Type.findOrFail(post.type_id);

    const model = new Attribute();
    model.name = post.name;
    model.type_id = post.type_id;

    await model.save();

    const productAttribute = new ProductAttributes();
    productAttribute.product_id = post.product_id;
    productAttribute.attribute_id = model.id;
    productAttribute.value = post.value;

    await productAttribute.save();

    return response.json(await this.findModel({ id: model.id }));
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
    const post = request.only(['product_id', 'type_id', 'name', 'value']);

    await Product.findOrFail(post.product_id);
    await Type.findOrFail(post.type_id);

    const model = await this.findModel(params);

    if (!model) {
      return response.status(404).json({ error: 'Model was not found' });
    }

    model.name = post.name;
    model.type_id = post.type_id;

    await model.save();

    const foundProductAttribute = await ProductAttributes.query()
      .where('product_id', post.product_id)
      .where('attribute_id', model.id)
      .first();

    const productAttribute = foundProductAttribute || new ProductAttributes();

    productAttribute.product_id = post.product_id;
    productAttribute.attribute_id = model.id;
    productAttribute.value = post.value;

    await productAttribute.save();

    return response.json(await this.findModel({ id: model.id }));
  }

  async findModel(params) {
    return Attribute.query()
      .with('type')
      .with('products')
      .where('id', params.id)
      .first();
  }
}

AttributesController.model = 'App/Models/Attribute';
AttributesController.modelFields = ['product_id', 'name', 'value'];

module.exports = AttributesController;
