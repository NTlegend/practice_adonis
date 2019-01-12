const RestController = require('./RestController');

class UsersController extends RestController {}

UsersController.model = 'App/Models/User';
UsersController.modelFields = ['username', 'email', 'password'];

module.exports = UsersController;
