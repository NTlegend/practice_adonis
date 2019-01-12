const RestController = require('./RestController');

class ProductsController extends RestController {}

ProductsController.model = 'App/Models/Product';
ProductsController.modelFields = ['name', 'price', 'type_id', 'user_id'];

module.exports = ProductsController;
