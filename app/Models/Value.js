const Model = use('Model');

class Value extends Model {
  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }

  attribute() {
    return this.belongsTo('App/Models/Attribute');
  }
}

module.exports = Value;
