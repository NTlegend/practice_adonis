const User = use('App/Models/User');
const Role = use('Role');

/** @type {import('@adonisjs/lucid/src/Factory')} */
class UserSeeder {
  async run() {
    await User.query().delete();
    await Role.query().delete();

    const roleAdmin = new Role();
    roleAdmin.name = 'Admin';
    roleAdmin.slug = 'admin';
    roleAdmin.description = 'manage administration privileges';
    await roleAdmin.save();

    const roleUser = new Role();
    roleUser.name = 'User';
    roleUser.slug = 'user';
    roleUser.description = 'manage user privileges';
    await roleUser.save();

    const admin = await User.create({
      username: 'admin',
      email: 'admin@mindk.com',
      password: '123456'
    });
    await admin.roles().attach([roleAdmin.id]);

    const user = await User.create({
      username: 'user',
      email: 'user@mindk.com',
      password: '123456'
    });
    await user.roles().attach([roleUser.id]);
  }
}

module.exports = UserSeeder;
