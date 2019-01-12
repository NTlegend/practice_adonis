/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Attribute extends Model {
  type() {
    return this.belongsTo('App/Models/Type');
  }

  products() {
    return this.belongsToMany('App/Models/Product')
      .pivotTable('product_attributes')
      .withPivot(['value']);
  }
}

module.exports = Attribute;
