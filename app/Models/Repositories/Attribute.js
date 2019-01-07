class Attribute {
  static async getAttributes({ page, perPage, search, order, sort }) {
    return this.query()
      .where(function() {
        if (search) {
          this.whereRaw('LOWER(title) LIKE ?', `%${search.toLowerCase()}%`);
        }
      })
      .orderBy(order, sort)
      .paginate(page, perPage);
  }

  static async getSingleAttribute(id) {
    return this.query()
      .where('id', id)
      .firstOrFail();
  }
}

module.exports = Attribute;
