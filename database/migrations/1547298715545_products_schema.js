/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductsSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments();
      table
        .integer('type_id')
        .unsigned()
        .notNullable();
      table
        .foreign('type_id')
        .references('id')
        .inTable('types')
        .onDelete('CASCADE');
      table
        .integer('user_id')
        .unsigned()
        .notNullable();
      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table.string('title', 50).notNullable();
      table.float('price').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ProductsSchema;
