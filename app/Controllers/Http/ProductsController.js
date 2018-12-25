const RestController = require('./RestController');

class ProductsController extends RestController {}

ProductsController.model = 'product';

module.exports = ProductsController;
