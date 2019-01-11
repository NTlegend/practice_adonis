/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Product extends Model {
  static get updatedAtColumn() {
    return null;
  }

  types() {
    return this.hasMany('App/Models/Type');
  }

  users() {
    return this.hasMany('App/Models/User');
  }
}

module.exports = Product;
