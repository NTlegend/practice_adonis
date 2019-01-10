class Type {
  static async findByName(name) {
    const query = this.query();
    if (name) {
      query.where({ name });
    }

    return query.fetch();
  }
}

module.exports = Type;
