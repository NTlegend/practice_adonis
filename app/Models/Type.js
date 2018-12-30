const Model = use('Model');

class Type extends Model {
  attributes() {
    return this.belongsToMany('App/Models/Attribute');
  }

  static getTypes({ page, perPage, search, order, sort }) {
    return this.query()
      .with('attributes')
      .where(function() {
        if (search) {
          this.whereRaw('LOWER(title) LIKE ?', `%${search.toLowerCase()}%`);
        }
      })
      .orderBy(order, sort)
      .paginate(page, perPage);
  }

  static getSingleType(id) {
    return this.query()
      .with('attributes')
      .where('id', id)
      .firstOrFail();
  }
}

module.exports = Type;
