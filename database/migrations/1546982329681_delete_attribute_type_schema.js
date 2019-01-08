const Schema = use('Schema');

class DeleteAttributeTypeSchema extends Schema {
  up() {
    this.drop('attribute_type');
  }

  down() {
    //
  }
}

module.exports = DeleteAttributeTypeSchema;
