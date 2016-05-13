define('es-stats/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'es-stats/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _esStatsConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_esStatsConfigEnvironment['default'].APP.name, _esStatsConfigEnvironment['default'].APP.version)
  };
});