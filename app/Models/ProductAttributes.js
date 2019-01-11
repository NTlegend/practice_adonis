/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ProductAttributes extends Model {
  products() {
    return this.hasMany('App/Models/Product');
  }

  attributes() {
    return this.hasMany('App/Models/Attribute');
  }
}

module.exports = ProductAttributes;
