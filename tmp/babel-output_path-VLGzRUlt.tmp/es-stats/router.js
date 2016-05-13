define('es-stats/router', ['exports', 'ember', 'es-stats/config/environment'], function (exports, _ember, _esStatsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _esStatsConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('stats');
  });

  exports['default'] = Router;
});