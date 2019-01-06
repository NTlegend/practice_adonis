/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductSchema extends Schema {
  up() {
    this.create('types', table => {
      table.increments();

      table.string('name', 100);

      table.timestamps();
    });

    this.create('products', table => {
      table.increments();

      table.string('name', 100).notNullable();
      table.decimal('price', 10, 5).default(0);

      table
        .integer('type_id')
        .notNullable()
        .index();

      table
        .foreign('type_id')
        .references('id')
        .on('types')
        .onDelete('cascade');

      table.timestamps();
    });
  }

  down() {
    this.drop('products');
    this.drop('types');
  }
}

module.exports = ProductSchema;
