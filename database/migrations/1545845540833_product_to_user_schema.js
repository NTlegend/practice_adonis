/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductToUserSchema extends Schema {
  up() {
    this.table('products', table => {
      table
        .integer('user_id')
        .notNullable()
        .index();

      table
        .foreign('user_id')
        .references('id')
        .on('users')
        .onDelete('cascade');
    });
  }

  down() {
    this.table('products', table => {
      table.dropColumns('user_id');
    });
  }
}

module.exports = ProductToUserSchema;
