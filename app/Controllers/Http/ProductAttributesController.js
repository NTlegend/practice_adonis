const RestController = require('./RestController');

class ProductAttributesController extends RestController {}

ProductAttributesController.model = 'productAttribute';

module.exports = ProductAttributesController;
