const RestController = require('./RestController');

class TypesController extends RestController {}

TypesController.model = 'App/Models/Type';
TypesController.modelFields = ['name'];

module.exports = TypesController;
