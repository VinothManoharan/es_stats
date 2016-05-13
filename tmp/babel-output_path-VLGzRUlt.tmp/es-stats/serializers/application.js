define('es-stats/serializers/application', ['exports', 'ember-data/serializers/json-api', 'ember-data/serializers/json'], function (exports, _emberDataSerializersJsonApi, _emberDataSerializersJson) {

  /*export default JSONAPISerializer.extend({
  });
  */
  exports['default'] = _emberDataSerializersJson['default'].extend({
    primaryKey: "cluster_name",
    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      // Customize my JSON payload for Ember-Data
      alert("store" + Object.keys(payload));
      return this._super.apply(this, arguments);
    }
  });
});