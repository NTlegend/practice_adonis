const Type = use('App/Models/Type');

/** @type {import('@adonisjs/lucid/src/Factory')} */
class TypeSeeder {
  async run() {
    await Type.query().delete();

    const types = [{ name: 'notebook' }, { name: 'phone' }, { name: 'car' }];

    await Type.createMany(types);
  }
}

module.exports = TypeSeeder;
