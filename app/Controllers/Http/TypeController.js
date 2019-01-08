const Type = use('App/Models/Type');
const Antl = use('Antl');
const Env = use('Env');

class TypeController {
  async index({ request }) {
    const {
      page = 1,
      perPage = Env.get('PAGINATE_LIMIT', 10),
      search = false,
      order = 'id',
      sort = 'ASC'
    } = request.all();
    return Type.getTypes({ page, perPage, search, order, sort });
  }

  async show({ params }) {
    return Type.getSingleType(params.id);
  }

  async store({ request, response }) {
    await Type.create({ title: request.input('title') });
    return response.status(201).json({ message: Antl.formatMessage('messages.created') });
  }

  async update({ request, response, params }) {
    const type = await Type.findOrFail(params.id);
    const { title } = request.all();
    type.title = title;
    await type.save();
    return response.json({ message: Antl.formatMessage('messages.updated') });
  }

  async destroy({ response, params }) {
    const type = await Type.findOrFail(params.id);
    await type.delete();
    return response.status(204);
  }
}

module.exports = TypeController;
