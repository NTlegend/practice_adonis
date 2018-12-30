const Factory = use('Factory');

class AttributeSeeder {
  async run() {
    await Factory.model('App/Models/Attribute').createMany(50);
  }
}

module.exports = AttributeSeeder;
