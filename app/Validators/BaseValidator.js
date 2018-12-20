const generateMessage = use('App/Helpers/validation');
const Config = use('Config');

class BaseValidator {
  get validateAll() {
    return true;
  }

  get messages() {
    const messages = {};
    const locale = this.ctx ? this.ctx.locale : Config.get('app.locales.locale');
    const messagesFileName = this.constructor.name.replace('Validator', '').toLowerCase();
    for (const key in this.rules) {
      if (this.rules.hasOwnProperty(key)) {
        this.rules[key].split('|').forEach(rule => {
          const { field, message, validation } = generateMessage({
            messagesFileName,
            field: key,
            locale,
            rule
          });
          messages[`${field}.${validation}`] = message;
        });
      }
    }
    return messages;
  }
}

module.exports = BaseValidator;
