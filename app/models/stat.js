import DS from 'ember-data';

export default DS.Model.extend({
  cluster_name:DS.attr(),
  nodes:DS.attr()
});
