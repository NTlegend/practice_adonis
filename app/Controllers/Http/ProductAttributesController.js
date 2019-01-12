const RestController = require('./RestController');

class ProductAttributesController extends RestController {}

ProductAttributesController.model = 'productAttribute';
ProductAttributesController.modelFields = ['product_id', 'name', 'value'];

module.exports = ProductAttributesController;
