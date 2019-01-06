/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AttributesSchema extends Schema {
  up() {
    this.create('attributes', table => {
      table.increments();

      table.string('name', 1000).notNullable();

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
    this.drop('attributes');
  }
}

module.exports = AttributesSchema;
