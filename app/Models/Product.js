/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Product extends Model {
  static get updatedAtColumn() {
    return null;
  }

  type() {
    return this.belongsTo('App/Models/Type');
  }
}

module.exports = Product;
