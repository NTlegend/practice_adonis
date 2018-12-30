const Schema = use('Schema');

class Types extends Schema {
  up() {
    this.create('types', table => {
      table.increments();
      table.string('title').nullable(false);
      table.timestamps();
    });
  }

  down() {
    this.drop('types');
  }
}

module.exports = Types;
