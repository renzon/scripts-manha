(function () {
  var categoriaServicos = angular.module('categoria-servicos', []);

  categoriaServicos.factory('CategoriaAPI', function () {
    return {
      salvar: function (categoria) {
        console.log('Chamada ajax fake para salvar');
        console.log(categoria);
      }
    };
  });
})();