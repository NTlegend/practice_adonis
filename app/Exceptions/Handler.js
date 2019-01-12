const BaseExceptionHandler = use('BaseExceptionHandler');

class ExceptionHandler extends BaseExceptionHandler {
  async handle({ name, message, messages }, { response }) {
    if (message.includes('invalid input syntax for integer')) {
      return response.status(400).json({ message: 'Wrong argument given' });
    }
    if (name === 'ValidationException') {
      return response.status(422).json(messages);
    }

    return super.handle(...arguments);
  }
}

module.exports = ExceptionHandler;
