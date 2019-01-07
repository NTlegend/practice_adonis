const Route = use('Route');

Route.group(() => {
  Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));

  Route.post('/types/:id/attributes/:attributeId', 'TypeController.addAttribute');

  Route.delete('/types/:id/attributes/:attributeId', 'TypeController.removeAttribute');

  Route.resource('types', 'TypeController')
    .apiOnly()
    .validator(new Map([[['types.store'], ['/TypeStore']]]));

  Route.resource('attributes', 'AttributeController')
    .apiOnly()
    .validator(new Map([[['attributes.store'], ['/AttributeStore']]]));
}).prefix('api/v1');
