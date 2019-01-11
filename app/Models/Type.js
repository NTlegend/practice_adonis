const Base = require('./Base');

class Type extends Base {
  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }

  attributes() {
    return this.hasMany('App/Models/Attribute');
  }
}

module.exports = Type;
