/*
|--------------------------------------------------------------------------
| AttributeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const faker = require('faker');

const Attribute = use('App/Models/Attribute');

class AttributeSeeder {
  async run() {
    await Attribute.query().delete();

    const attributes = [];

    [...Array(100).keys()].forEach(number => {
      attributes.push({
        id: number,
        name: faker.random.words(),
        type_id: faker.random.number({ max: 4 })
      });
    });

    await Attribute.createMany(attributes);
  }
}

module.exports = AttributeSeeder;
