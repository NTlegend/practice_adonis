const Type = use('App/Models/Type');
const Antl = use('Antl');
const Env = use('Env');

class TypeController {
  async index({ request, response }) {
    const {
      page = 1,
      perPage = Env.get('PAGINATE_LIMIT', 10),
      search = false,
      order = 'id',
      sort = 'ASC'
    } = request.all();
    const types = await Type.getTypes({ page, perPage, search, order, sort });
    return response.json(types);
  }

  async show({ response, params }) {
    const type = await Type.getSingleType(params.id);
    return response.json(type);
  }

  async store({ request, response }) {
    const newType = await Type.create({ title: request.input('title') });
    await newType.attributes().sync(request.input('attributes').split(','));
    return response.status(201).json({ message: Antl.formatMessage('messages.created') });
  }

  async update({ request, response, params }) {
    const type = await Type.findOrFail(params.id);
    const { title, attributes } = request.all();
    if (title) {
      type.title = title;
      await type.save();
    }
    if (attributes) {
      await type.attributes().sync(request.input('attributes').split(','));
    }
    return response.json({ message: Antl.formatMessage('messages.updated') });
  }

  async destroy({ response, params }) {
    const type = await Type.findOrFail(params.id);
    await type.delete();
    return response.json({ message: Antl.formatMessage('messages.deleted') });
  }
}

module.exports = TypeController;
