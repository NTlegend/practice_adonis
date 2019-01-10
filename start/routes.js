/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));

Route.post('/login', 'AuthController.login');

Route.get('/products', 'ProductController.index');
Route.post('/products', 'ProductController.store').validator('StoreProduct');

Route.get('/types', 'TypeController.index');
Route.get('/types/:id', 'TypeController.show');
Route.delete('/types/:id', 'TypeController.delete');

Route.get('/types/:id/attrs', 'AttrController.index');
