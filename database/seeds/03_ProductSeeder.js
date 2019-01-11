/** @type {import('@adonisjs/lucid/src/Factory')} */
class ProductSeeder {
  async run() {
    await Product.query().delete();
    const products = [
      { name: 'QX11', user_id: 1, type_id: 1 }, 
      { name: 'FrostByte-15', user_id: 2, type_id: 2 }, 
      { name: 'MAC Boss 3', user_id: 3, type_id: 3 },
      { name: 'LinkSys Pro', user_id: 1, type_id: 1 },
      { name: 'Tonky Pad - UK', user_id: 2, type_id: 2 },
      { name: 'Phone One X', user_id: 3, type_id: 3 }
    ];
    await Product.createMany(products);
  }
}

module.exports = ProductSeeder;
