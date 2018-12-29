const Schema = use('Schema');

class AddUsernameSchema extends Schema {
  up() {
    this.table('users', table => {
      table.string('username').nullable();
    });
  }

  down() {
    this.table('users', table => {
      table.dropColumn('username');
    });
  }
}

module.exports = AddUsernameSchema;
