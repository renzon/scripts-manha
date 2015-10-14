var getVarsGlobal;
var nGet = 0;
$.get = function (url) {
  nGet++;
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

  getVarsGlobal = getVarsHolder;

  return getVarsHolder;
};

QUnit.test('Hello World', function (assert) {
  assert.strictEqual('http://localhost:8080/categorias/rest', getVarsGlobal.url, 'Verificando url de chamada ajax para listar categorias');
  assert.strictEqual(1, nGet, 'Verificando que get é chamado apenas uma vez');
});