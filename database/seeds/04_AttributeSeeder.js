/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

class AttributeSeeder {
  async run() {
    async Attribute.query().delete();
    const attributes = [
        { name: 'Display Type', type_id: 1 }, 
        { name: 'Display Resolution', type_id: 1 }, 
        { name: 'RAM', type_id: 2 },
        { name: 'ROM', type_id: 3 }
      ];
    await Attribute.createMany(attributes);    
  }
}

module.exports = AttributeSeeder
