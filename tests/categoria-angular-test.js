QUnit.test('Teste de Controlador Angular', function (assert) {

  angular.module('categoria-components', []);
  angular.module('categoriaApp');

  var injector = angular.injector(['ng', 'categoriaApp']);

  var escopo = {};


  assert.strictEqual(0, escopo.categorias.length, 'Categorias vazio inicialmente');
  var cat0 = {
    'id': 1,
    creation: '02/02/02 02:02:02',
    nome: 'Celulares'
  };

  escopo.adicionarCategoria(cat0);
  assert.strictEqual(1, escopo.categorias.length, 'Uma Categoria adicionada');
  assert.strictEqual(cat0, escopo.categorias[0], 'Categoria adicionada na primeira posicao');
  var cat1 = {
    'id': 2,
    creation: '03/03/03 02:02:02',
    nome: 'Notebooks'
  };
  escopo.adicionarCategoria(cat1);
  assert.strictEqual(2, escopo.categorias.length, 'Uma Categoria adicionada');
  assert.strictEqual(cat0, escopo.categorias[1], 'Categoria movida para segunda posição');
  assert.strictEqual(cat1, escopo.categorias[0], 'Categoria adicionada na primeira posicao');

});