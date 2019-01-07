const Schema = use('Schema');

class MakeAttributeIdNotNullabeSchema extends Schema {
  up() {
    this.table('attribute_type', table => {
      table
        .integer('attribute_id')
        .unsigned()
        .notNullable()
        .alter();
    });
  }

  down() {
    this.table('attribute_type', table => {
      table
        .integer('attribute_id')
        .unsigned()
        .nullable()
        .alter();
    });
  }
}

module.exports = MakeAttributeIdNotNullabeSchema;
