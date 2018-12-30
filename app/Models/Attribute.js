const Model = use('Model');

class Attribute extends Model {
  static getAttributes({ page, perPage, search, order, sort }) {
    return this.query()
      .where(function() {
        if (search) {
          this.whereRaw('LOWER(title) LIKE ?', `%${search.toLowerCase()}%`);
        }
      })
      .orderBy(order, sort)
      .paginate(page, perPage);
  }

  static getSingleAttribute(id) {
    return this.query()
      .where('id', id)
      .firstOrFail();
  }
}

module.exports = Attribute;
