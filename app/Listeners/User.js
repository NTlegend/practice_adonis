const Env = use('Env');
const Mail = use('Mail');

class User {
  async onCreate(data) {
    const { email, rawPassword } = data;
    await Mail.send('registration', { email, rawPassword }, message => {
      message.to(data.email);
      message.from(Env.get('ADMIN_EMAIL', 'info@marketplace.com'));
    });
  }
}

module.exports = User;
