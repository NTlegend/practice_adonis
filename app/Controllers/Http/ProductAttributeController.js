const RestController = require('./RestController');

class ProductController extends RestController {}

ProductController.model = 'productAttribute';

module.exports = ProductController;
