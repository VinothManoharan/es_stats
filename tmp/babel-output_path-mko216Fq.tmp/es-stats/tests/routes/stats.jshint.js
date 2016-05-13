define('es-stats/tests/routes/stats.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/stats.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/stats.js should pass jshint.');
  });
});