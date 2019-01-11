const Model = use('Model');

class Base extends Model {
  static boot() {
    super.boot();
    this.addTrait('App/Models/Traits/Repository');
  }
}

module.exports = Base;
