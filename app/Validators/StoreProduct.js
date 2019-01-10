const Validator = use('Validator');
const Type = use('App/Models/Type');

const attrsFn = async (data, field, message) => {
  const { type_id: typeId, attrs } = data;
  const type = await Type.findOrFail(typeId);
  const { rows: typeAttrs } = await type.attrs().fetch();

  let fails = typeAttrs.length !== Object.keys(attrs).length;
  typeAttrs.forEach(typeAttr => {
    fails = fails || typeof attrs[typeAttr.id] === 'undefined';
  });

  if (fails) {
    throw message;
  }
};

Validator.extend('attrs', attrsFn);

class StoreProduct {
  get rules() {
    return {
      type_id: 'required',
      name: 'required|max:60',
      price: 'required',
      attrs: 'required|attrs'
    };
  }
}

module.exports = StoreProduct;
