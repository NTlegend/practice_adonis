const BaseExceptionHandler = use('BaseExceptionHandler');

class ExceptionHandler extends BaseExceptionHandler {
  async handle(error, { response }) {
    if (error.message.includes('invalid input syntax for integer')) {
      return response.status(400).json({ message: 'Wrong argument given' });
    }
    return super.handle(...arguments);
  }
}

module.exports = ExceptionHandler;
