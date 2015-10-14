QUnit.test('Hello World', function (assert) {
  assert.ok(false, 'Testando método ok');
  assert.equal(1, '1', 'Testando método equal');
  assert.strictEqual(1, '1', 'Testando método strictEqual');
});