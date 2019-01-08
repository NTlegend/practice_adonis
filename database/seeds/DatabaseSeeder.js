const Factory = use('Factory');
const Type = use('App/Models/Type');

class DatabaseSeeder {
  async run() {
    const types = await Factory.model('App/Models/Type').createMany(10);
    types.forEach(async type => {
      await Factory.model('App/Models/Attribute').create({ typeId: type.id });
    })
  }
}

module.exports = DatabaseSeeder;
