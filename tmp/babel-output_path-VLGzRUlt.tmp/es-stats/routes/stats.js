define('es-stats/routes/stats', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			var result = this.store.find('stat', 1);
			console.log("result :" + result.cluster_name + "\tnodes:" + result.nodes);
			return this.store.find('stat', 1);
		},
		setupController: function setupController() {}
	});
});