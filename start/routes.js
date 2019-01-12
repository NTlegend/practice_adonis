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

['products', 'productAttributes', 'users', 'types'].forEach(controller => {
  const controllerClass = `${controller.charAt(0).toUpperCase() + controller.slice(1)}Controller`;
  Route.get(`/${controller}`, `${controllerClass}.index`);
  Route.post(`/${controller}`, `${controllerClass}.store`);
  Route.get(`/${controller}/:id`, `${controllerClass}.show`);
  Route.put(`/${controller}/:id`, `${controllerClass}.update`);
  Route.patch(`/${controller}/:id`, `${controllerClass}.update`);
  Route.delete(`/${controller}/:id`, `${controllerClass}.destroy`);
});
