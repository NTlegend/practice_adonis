const Factory = use('Factory');

Factory.blueprint('App/Models/Type', async (faker, i, data) => ({
  title: data.title || faker.word({ length: 5 })
}));

Factory.blueprint('App/Models/Attribute', async (faker, i, data) => ({
  title: data.title || faker.word({ length: 5 })
}));
