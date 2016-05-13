define('es-stats/tests/helpers/resolver', ['exports', 'ember-resolver', 'es-stats/config/environment'], function (exports, _emberResolver, _esStatsConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _esStatsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _esStatsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});