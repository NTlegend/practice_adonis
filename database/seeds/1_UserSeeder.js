/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const faker = require('faker');

/* const Hash = use('Hash'); */

const User = use('App/Models/User');

class UserSeeder {
  async run() {
    await User.query().delete();

    const users = [];

    [...Array(5).keys()].forEach(number => {
      users.push({
        id: number,
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: 'user'
      });
    });

    await User.createMany(users);
  }
}

module.exports = UserSeeder;
