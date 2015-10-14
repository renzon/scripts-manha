$.get = function (url) {
  console.log(url);
  var getVarsHolder = {
    'url': url,
    success: function (callback) {
      this.successCallback = callback;
      return this
    }, error: function (callback) {
      this.errorCallback = callback;
      return this
    }, always: function (callback) {
      this.alwaysCallback = callback;
      return this
    }
  };

  return getVarsHolder;
};

QUnit.test('Hello World', function (assert) {
  assert.ok(true, 'Testando método ok');
});