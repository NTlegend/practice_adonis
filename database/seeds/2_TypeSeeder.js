const Type = use('App/Models/Type');

class TypeSeeder {
  async run() {
    await Type.query().delete();

    const types = [
      { id: 0, name: 'phone' },
      { id: 1, name: 'case' },
      { id: 2, name: 'electronics' },
      { id: 3, name: 'pc' },
      { id: 4, name: 'tablet' }
    ];

    await Type.createMany(types);
  }
}

module.exports = TypeSeeder;
