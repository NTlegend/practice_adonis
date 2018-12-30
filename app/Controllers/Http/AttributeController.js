const Attribute = use('App/Models/Attribute');
const Antl = use('Antl');
const Env = use('Env');

class AttributeController {
  async index({ request, response }) {
    const {
      page = 1,
      perPage = Env.get('PAGINATE_LIMIT', 10),
      search = false,
      order = 'id',
      sort = 'ASC'
    } = request.all();
    const attributes = await Attribute.getAttributes({ page, perPage, search, order, sort });
    return response.json(attributes);
  }

  async show({ response, params }) {
    const attribute = await Attribute.getSingleAttribute(params.id);
    return response.json(attribute);
  }

  async store({ request, response }) {
    await Attribute.create({ title: request.input('title') });
    return response.status(201).json({ message: Antl.formatMessage('messages.created') });
  }

  async update({ request, response, params }) {
    const attribute = await Attribute.findOrFail(params.id);
    const title = request.input('title');
    if (title) {
      attribute.title = title;
      await attribute.save();
    }
    return response.json({ message: Antl.formatMessage('messages.updated') });
  }

  async destroy({ response, params }) {
    const attribute = await Attribute.findOrFail(params.id);
    await attribute.delete();
    return response.json({ message: Antl.formatMessage('messages.deleted') });
  }
}

module.exports = AttributeController;
