/*
|--------------------------------------------------------------------------
| ProductAttributeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const faker = require('faker');

const ProductAttributes = use('App/Models/ProductAttributes');

class ProductAttributeSeeder {
  async run() {
    await ProductAttributes.query().delete();

    const attributes = [];

    [...Array(100).keys()].forEach(() => {
      attributes.push({
        value: faker.random.words(),
        product_id: faker.random.number({ max: 9 }),
        attribute_id: faker.random.number({ max: 99 })
      });
    });

    await ProductAttributes.createMany(attributes);
  }
}

module.exports = ProductAttributeSeeder;
