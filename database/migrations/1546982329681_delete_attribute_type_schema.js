const Schema = use('Schema');

class DeleteAttributeTypeSchema extends Schema {
  up() {
    this.dropIfExists('attribute_type');
  }

  down() {
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
    });
  }
}

module.exports = DeleteAttributeTypeSchema;
