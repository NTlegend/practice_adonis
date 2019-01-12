const Schema = use('Schema');

class AddTypeIdInAttributesSchema extends Schema {
  up() {
    this.table('attributes', table => {
      table
        .integer('type_id')
        .unsigned()
        .notNullable();
      table
        .foreign('type_id')
        .references('id')
        .inTable('types')
        .onDelete('CASCADE');
    });
  }

  down() {
    this.table('attributes', table => {
      table.dropForeign('type_id');
      table.dropColumn('type_id');
    });
  }
}

module.exports = AddTypeIdInAttributesSchema;
