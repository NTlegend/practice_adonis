/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ValuesSchema extends Schema {
  up() {
    this.create('values', table => {
      table.increments();
      table
        .integer('attribute_id')
        .unsigned()
        .notNullable();
      table
        .foreign('attribute_id')
        .references('id')
        .inTable('attributes')
        .onDelete('CASCADE');
      table
        .integer('product_id')
        .unsigned()
        .notNullable();
      table
        .foreign('product_id')
        .references('id')
        .inTable('products')
        .onDelete('CASCADE');
      table.string('value').notNullable();
    });
  }

  down() {
    this.drop('values');
  }
}

module.exports = ValuesSchema;
