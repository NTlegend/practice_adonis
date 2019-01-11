/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Attribute extends Model {
  types() {
    return this.hasOne('App/Models/Type');
  }

  products() {
    return this.belongsToMany('App/Models/Product');
  }
}

module.exports = Attribute;
