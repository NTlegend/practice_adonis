/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));

Route.post('/login', 'AuthController.login');

Route.get('products', 'ProductController.index');
Route.post('products', 'ProductController.create');

Route.get('products/:id', 'ProductController.show');
Route.patch('products/:id', 'ProductController.update');
Route.delete('products/:id', 'ProductController.delete');

// Route.get('types', 'TypeController.index');
// Route.post('types', 'TypeController.newType');
// Route.get('types/:id', 'TypeController.show');
// Route.delete('types/:id', 'TypeController.delete');
