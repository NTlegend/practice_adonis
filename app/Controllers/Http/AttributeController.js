const Attribute = use('App/Models/Attribute');
const Antl = use('Antl');
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
    await Attribute.create({ title: request.input('title') });
    return response.status(201).json({ message: Antl.formatMessage('messages.created') });
  }

  async update({ request, response, params }) {
    const attribute = await Attribute.findOrFail(params.id);
    const { title } = request.all();
    attribute.title = title;
    await attribute.save();
    return response.json({ message: Antl.formatMessage('messages.updated') });
  }

  async destroy({ response, params }) {
    const attribute = await Attribute.findOrFail(params.id);
    await attribute.delete();
    return response.status(204);
  }
}

module.exports = AttributeController;
