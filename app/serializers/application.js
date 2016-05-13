import JSONAPISerializer from 'ember-data/serializers/json-api';
import JSONSerializer from 'ember-data/serializers/json';

/*export default JSONAPISerializer.extend({
});
*/
export default JSONSerializer.extend({
	primaryKey:"cluster_name",
	normalizeResponse(store, primaryModelClass, payload, id, requestType)  {
  		// Customize my JSON payload for Ember-Data
  		alert("store" + Object.keys(payload));
  		return this._super(...arguments);
	}
});