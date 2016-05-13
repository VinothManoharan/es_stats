define('es-stats/app', ['exports', 'ember', 'ember-resolver', 'ember/load-initializers', 'es-stats/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _esStatsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _esStatsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _esStatsConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _esStatsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});