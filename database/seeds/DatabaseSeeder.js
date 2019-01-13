const Factory = use('Factory');

class DatabaseSeeder {
  async run() {
    const types = await Factory.model('App/Models/Type').createMany(10);
    const attributes = await Promise.all(
      types.map(type => Factory.model('App/Models/Attribute').create({ typeId: type.id }))
    );
    const users = await Factory.model('App/Models/User').createMany(10);
    const products = await Promise.all(
      types.map(type =>
        Factory.model('App/Models/Product').create({
          typeId: type.id,
          userId: users[Math.floor(Math.random() * users.length)].id
        })
      )
    );
    await Promise.all(
      products.map(product =>
        Factory.model('App/Models/Value').create({
          productId: product.id,
          attributeId: attributes[Math.floor(Math.random() * attributes.length)].id
        })
      )
    );
  }
}

module.exports = DatabaseSeeder;
