/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

class UserSeeder {
  async run() {
    // eslint-disable-next-line no-unused-vars
    const users = await Factory.model('App/Models/User').createMany(3);
  }
}

module.exports = UserSeeder;
