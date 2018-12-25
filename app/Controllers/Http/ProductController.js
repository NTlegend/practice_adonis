const RestController = require('./RestController');

class ProductController extends RestController {}

ProductController.model = 'product';

module.exports = ProductController;
