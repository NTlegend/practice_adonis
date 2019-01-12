const { hooks } = require('@adonisjs/ignitor');

hooks.after.providersBooted(() => {
  const Database = use('Database');
  const Validator = use('Validator');
  const existFn = async (data, field, message, args, get) => {
    const id = get(data, field);
    const table = args[0];
    if (!id) {
      // skip validation if value is not defined or not index. `required` or `integer` rules should take care of it.
      return;
    }
    const tableExist = await Database.raw(
      'SELECT table_name FROM information_schema.tables WHERE table_name = ? LIMIT 1',
      [table]
    );
    if (!tableExist.rows[0]) {
      throw message;
    }
    const record = await Database.table(table)
      .where('id', id)
      .first();
    if (!record) {
      throw message;
    }
  };

  const sizeFn = async (data, field, message, args, get) => {
    const value = get(data, field);
    if (!value) {
      // skip validation if value is not defined or not index. `required` or `integer` rules should take care of it.
      return;
    }
    if (value.size / 1000 > args[0]) {
      throw message;
    }
  };

  Validator.extend('exist', existFn);
  Validator.extend('size', sizeFn);
});
