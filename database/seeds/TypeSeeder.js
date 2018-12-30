const Factory = use('Factory');

class TypeSeeder {
  async run() {
    await Factory.model('App/Models/Type').createMany(50);
  }
}

module.exports = TypeSeeder;
