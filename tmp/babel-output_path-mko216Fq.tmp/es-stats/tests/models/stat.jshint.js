define('es-stats/tests/models/stat.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/stat.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/stat.js should pass jshint.');
  });
});