const Schema = use('Schema');

class TypeAttributeSchema extends Schema {
  up() {
    this.create('attribute_type', table => {
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
      table.integer('attribute_id').unsigned();
      table
        .foreign('attribute_id')
        .references('id')
        .inTable('attributes')
        .onDelete('CASCADE');
      table.timestamps();
    });
  }

  down() {
    this.drop('attribute_type');
  }
}

module.exports = TypeAttributeSchema;
