const Type = use('App/Models/Type');
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
    const newType = await Type.create({ title: request.input('title') });
    return response.status(201).json(newType);
  }

  async update({ request, response, params }) {
    const type = await Type.findOrFail(params.id);
    const { title } = request.all();
    type.title = title;
    await type.save();
    return response.json(type);
  }

  async destroy({ response, params }) {
    const type = await Type.findOrFail(params.id);
    await type.delete();
    return response.status(204).send();
  }
}

module.exports = TypeController;
