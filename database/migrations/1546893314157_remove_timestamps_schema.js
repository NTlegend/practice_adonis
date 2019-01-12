const Schema = use('Schema');

class RemoveTimestampsSchema extends Schema {
  up() {
    this.table('types', table => {
      table.dropTimestamps();
    });
    this.table('attributes', table => {
      table.dropTimestamps();
    });
    this.table('attribute_type', table => {
      table.dropTimestamps();
    });
  }

  down() {
    this.table('types', table => {
      table.timestamps();
    });
    this.table('attributes', table => {
      table.timestamps();
    });
    this.table('attribute_type', table => {
      table.timestamps();
    });
  }
}

module.exports = RemoveTimestampsSchema;
