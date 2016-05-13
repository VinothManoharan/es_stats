define('es-stats/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'es-stats/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _esStatsConfigEnvironment) {

  var name = _esStatsConfigEnvironment['default'].APP.name;
  var version = _esStatsConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});