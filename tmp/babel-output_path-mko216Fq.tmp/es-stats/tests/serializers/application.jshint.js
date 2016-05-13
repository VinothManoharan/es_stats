define('es-stats/tests/serializers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/application.js should pass jshint.\nserializers/application.js: line 9, col 62, \'requestType\' is defined but never used.\nserializers/application.js: line 9, col 58, \'id\' is defined but never used.\nserializers/application.js: line 1, col 8, \'JSONAPISerializer\' is defined but never used.\n\n3 errors');
  });
});