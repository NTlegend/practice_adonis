const Base = require('./Base');
class Attribute extends Base {
  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Attribute;
