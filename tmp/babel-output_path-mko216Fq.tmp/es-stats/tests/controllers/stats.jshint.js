define('es-stats/tests/controllers/stats.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/stats.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/stats.js should pass jshint.');
  });
});