/** @type {import('@adonisjs/lucid/src/Factory')} */
const Product = use('App/Models/Product');

class ProductSeeder {
  async run() {
    await Product.query().delete();
    const products = [
      { name: 'QX11', user_id: 1, type_id: 1 }, 
      { name: 'FrostByte-15', user_id: 2, type_id: 2, price:'1000,45'}, 
      { name: 'MAC Boss 3', user_id: 3, type_id: 3, price:'200' },
      { name: 'LinkSys Pro', user_id: 1, type_id: 1, price:'100' },
      { name: 'Tonky Pad - UK', user_id: 2, type_id: 2, price:'1500' },
      { name: 'Phone One X', user_id: 3, type_id: 3, price:'125,45' }
    ];
    await Product.createMany(products);
  }
}

module.exports = ProductSeeder;
