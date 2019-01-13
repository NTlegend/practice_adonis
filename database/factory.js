const Factory = use('Factory');
const userTypes = ['Admin', 'User'];

Factory.blueprint('App/Models/Type', async (faker, i, data) => ({
  title: data.title || faker.word({ length: 5 })
}));

Factory.blueprint('App/Models/Attribute', async (faker, i, data) => ({
  title: data.title || faker.word({ length: 5 }),
  type_id: data.typeId
}));

Factory.blueprint('App/Models/User', async (faker, i, data) => ({
  username: data.username || faker.word({ length: 5 }),
  email: data.email || faker.email(),
  password: data.password || 'qwerty',
  role: data.role || userTypes[Math.floor(Math.random() * userTypes.length)]
}));

Factory.blueprint('App/Models/Product', async (faker, i, data) => ({
  type_id: data.typeId,
  user_id: data.userId,
  title: data.title || faker.word({ length: 5 }),
  price: data.price || faker.floating({ min: 100, max: 1000, fixed: 2 })
}));

Factory.blueprint('App/Models/Value', async (faker, i, data) => ({
  attribute_id: data.attributeId,
  product_id: data.productId,
  value: data.value || faker.word({ length: 5 })
}));
