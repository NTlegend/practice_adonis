const Base = require('./Base');

class Product extends Base {
  values() {
    return this.hasMany('App/Models/Value');
  }

  user() {
    return this.hasMany('App/Models/User');
  }

  type() {
    return this.hasMany('App/Models/Type');
  }
}

module.exports = Product;
