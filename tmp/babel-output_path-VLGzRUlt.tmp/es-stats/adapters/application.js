define('es-stats/adapters/application', ['exports', 'ember-data/adapters/json-api', 'ember-data/adapters/rest'], function (exports, _emberDataAdaptersJsonApi, _emberDataAdaptersRest) {

	/*export default JSONAPIAdapter.extend({
 	host:"http://172.20.11.233:9200",
 	namespace:"_nodes"
 });*/

	exports['default'] = _emberDataAdaptersRest['default'].extend({
		host: "http://172.20.11.233:9200",
		namespace: "/_nodes"
	});
});