/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

Factory.blueprint('App/Models/User', (faker, i) => ({
  username: faker.last({ nationality: 'it' }),
  email: faker.email({ domain: 'example.com' }),
  password: '123456',
  role: ['admin', 'guest', 'guest'][i]
}));
