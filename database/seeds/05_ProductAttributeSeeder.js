/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')
const ProductAttribute = use('App/Models/ProductAttribute');

class ProductAttributeSeeder {
  async run () {
    await ProductAttribute.query().delete();
    const prodAttrMatching = [
        { product_id:1, attribute_id: 1, value: 'Normal'}, 
        { product_id:2, attribute_id: 1, value: 'Normal' },
        { product_id:2, attribute_id: 2, value: '1920x1680' },
        { product_id:3, attribute_id: 2, value: 'Fantastic' },
        { product_id:4, attribute_id: 3, value: 'Extraordinar' },
        { product_id:5, attribute_id: 4, value: 'Outstanding' },
        { product_id:6, attribute_id: 4, value: 'Marvelous' },
      ];
    await ProductAttribute.createMany(prodAttrMatching);   
  }
}

module.exports = ProductAttributeSeeder;
