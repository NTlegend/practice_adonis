/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductAtributeSchema extends Schema {
  up() {
    this.create('productAttributes', table => {
      table.increments();
      table.timestamps();
      table.integer('product_id').notNullable();
      table
        .foreign('product_id')
        .references('id')
        .on('products')
        .onDelete('cascade');
      table.integer('attribute_id').notNullable();
      table
        .foreign('attribute_id')
        .references('id')
        .on('attributes')
        .onDelete('cascade');
      table.string('value').notNullable();
    });
  }

  down() {
    this.drop('product_attributes');
  }
}

module.exports = ProductAtributeSchema;
