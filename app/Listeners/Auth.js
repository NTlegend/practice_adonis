const Env = use('Env');
const Mail = use('Mail');
const Auth = {};

Auth.newUser = async data => {
  const { email, rawPassword } = data;
  await Mail.send('registration', { email, rawPassword }, message => {
    message.to(data.email);
    message.from(Env.get('ADMIN_EMAIL', 'info@marketplace.com'));
  });
};

module.exports = Auth;
