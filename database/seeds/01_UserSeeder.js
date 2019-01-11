/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

class UserSeeder {
  async run() {
    const users = await Factory.model('App/Models/User').createMany(3);
  }
}

module.exports = UserSeeder;
