const Factory = use('Factory');

class DatabaseSeeder {
  async run() {
    const types = await Factory.model('App/Models/Type').createMany(10);
    await Promise.all(types.map(type => Factory.model('App/Models/Attribute').create({ typeId: type.id })));
  }
}

module.exports = DatabaseSeeder;
