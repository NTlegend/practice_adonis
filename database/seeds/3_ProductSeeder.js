/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const faker = require('faker');

const Product = use('App/Models/Product');

class ProductSeeder {
  async run() {
    await Product.query().delete();

    const products = [];

    [...Array(10).keys()].forEach(number => {
      products.push({
        id: number,
        name: faker.random.words(),
        price: faker.commerce.price(),
        type_id: faker.random.number({ max: 4 }),
        user_id: faker.random.number({ max: 4 })
      });
    });

    await Product.createMany(products);
  }
}

module.exports = ProductSeeder;
