define('es-stats/models/stat', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    cluster_name: _emberData['default'].attr(),
    nodes: _emberData['default'].attr()
  });
});