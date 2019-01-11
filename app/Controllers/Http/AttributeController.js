const Attribute = use('App/Models/Attribute');
const Env = use('Env');

class AttributeController {
  async index({ request }) {
    const {
      page = 1,
      perPage = Env.get('PAGINATE_LIMIT', 10),
      search = false,
      order = 'id',
      sort = 'ASC'
    } = request.all();
    return Attribute.getAttributes({ page, perPage, search, order, sort });
  }

  async show({ params }) {
    return Attribute.getSingleAttribute(params.id);
  }

  async store({ request, response }) {
    const { title, typeId } = request.all();
    const attribute = await Attribute.create({ title, type_id: typeId });
    return response.status(201).json(attribute);
  }

  async update({ request, response, params }) {
    const attribute = await Attribute.findOrFail(params.id);
    const data = request.only(['title', 'type_id']);
    attribute.merge(data);
    await attribute.save();
    return response.json(attribute);
  }

  async destroy({ response, params }) {
    const attribute = await Attribute.findOrFail(params.id);
    await attribute.delete();
    return response.status(204).send();
  }
}

module.exports = AttributeController;
