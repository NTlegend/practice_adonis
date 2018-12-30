const Route = use('Route');

Route.group(() => {
  Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));

  Route.resource('types', 'TypeController')
    .apiOnly()
    .validator(
      new Map([
        [['types.store'], ['/Type/Store']],
        [['types.show'], ['CheckId']],
        [['types.update'], ['/Type/Update']],
        [['types.destroy'], ['CheckId']]
      ])
    );

  Route.resource('attributes', 'AttributeController')
    .apiOnly()
    .validator(
      new Map([
        [['attributes.store'], ['/Attribute/Store']],
        [['attributes.show'], ['CheckId']],
        [['attributes.update'], ['/Attribute/Update']],
        [['attributes.destroy'], ['CheckId']]
      ])
    );
}).prefix('api/v1');
