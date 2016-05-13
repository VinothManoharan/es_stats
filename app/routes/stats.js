import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		var result =  this.store.find('stat', 1);
		console.log("result :"+ result.cluster_name +"\tnodes:"+ result.nodes);
		return this.store.find('stat', 1);
	},
	setupController(){

	}
});
