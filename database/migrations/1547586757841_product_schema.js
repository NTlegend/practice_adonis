/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments();
      table.string('name', 60).notNullable();
      table
        .decimal('price')
        .notNullable()
        .default(0);
      table
        .integer('type_id')
        .notNullable()
        .index();
      table
        .foreign('type_id')
        .references('id')
        .on('types')
        .onDelete('cascade');
      table
        .integer('user_id')
        .notNullable()
        .index();
      table
        .foreign('user_id')
        .references('id')
        .on('users')
        .onDelete('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ProductSchema;
