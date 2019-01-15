/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductAttributeSchema extends Schema {
  up() {
    this.create('product_attributes', table => {
      table.increments();
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
      table.timestamps();
    });
  }

  down() {
    this.drop('product_attributes');
  }
}

module.exports = ProductAttributeSchema;
