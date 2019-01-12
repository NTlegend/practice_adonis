/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Product extends Model {
  static get hidden() {
    return ['user_id', 'type_id'];
  }

  type() {
    return this.hasOne('App/Models/Type');
  }

  user() {
    return this.hasOne('App/Models/User');
  }

  attributes() {
    return this.belongsToMany('App/Models/Attribute').withPivot(['value']);
  }
}

module.exports = Product;
