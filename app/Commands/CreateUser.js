const { Command } = require('@adonisjs/ace');

const Registration = use('App/Validators/Auth/Registration');
const { validate } = use('Validator');
const User = use('App/Models/User');
const Database = use('Database');
const Event = use('Event');

class CreateUser extends Command {
  static get signature() {
    return 'create:user';
  }

  static get description() {
    return 'Creating new user (admin or standard)';
  }

  async handle() {
    const answers = {
      role: await this.choice('Role', ['Admin', 'User']),
      email: await this.ask('Email'),
      username: await this.ask('Username (max:20)'),
      password: await this.secure('Password (min:6 | max:25)'),
      password_confirmation: await this.secure('Confirm password')
    };

    const { rules, messages } = new Registration();
    const validation = await validate(answers, rules, messages);
    if (validation.fails()) {
      this.error(`${this.icon('error')}  ${validation.messages()[0].message}`);
      process.exit(1);
    } else {
      delete answers.password_confirmation;
      const user = await User.create(answers);
      user.rawPassword = answers.password;
      Event.fire('createUser', user);
      this.success(`${this.icon('success')}  ${answers.role} created`);
      Database.close();
    }
  }
}

module.exports = CreateUser;
