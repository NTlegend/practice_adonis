class Type {
  static async findByName(name) {
    const {rows: result } = await this.query().where({name: name}).fetch();
    return result;
  }
}


module.exports = Type;
