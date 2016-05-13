import JSONAPIAdapter from 'ember-data/adapters/json-api';
import RESTAdapter from 'ember-data/adapters/rest';

/*export default JSONAPIAdapter.extend({
	host:"http://172.20.11.233:9200",
	namespace:"_nodes"
});*/

export default RESTAdapter.extend({
	host:"http://172.20.11.233:9200",
	namespace:"/_nodes"
});
