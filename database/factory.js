/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

Factory.blueprint('App/Models/Attr', async (faker, i, data) => ({
  name: faker.string({ length: 7 }),
  type_id: data.type_id
}));

Factory.blueprint('App/Models/Product', async (faker, i, data) => ({
  name: faker.string({ length: 7 }),
  price: faker.integer({ min: 200, max: 2000 }),
  user_id: data.user_id,
  type_id: data.type_id
}));

Factory.blueprint('App/Models/ProductAttr', async (faker, i, data) => ({
  product_id: data.product_id,
  attr_id: data.attr_id,
  value: faker.string({ length: 7 })
}));
