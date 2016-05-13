define('es-stats/tests/test-helper', ['exports', 'es-stats/tests/helpers/resolver', 'ember-qunit'], function (exports, _esStatsTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_esStatsTestsHelpersResolver['default']);
});