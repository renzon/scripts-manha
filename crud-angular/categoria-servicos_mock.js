(function () {
  var categoriaServicos = angular.module('categoria-servicos', []);

  categoriaServicos.factory('CategoriaAPI', function () {
    return {
      salvar: function (categoria) {
        const delay = 2000;
        console.log('Chamada ajax fake para salvar inciando');
        var id = 0;
        setTimeout(function () {
          id++;
          console.log({
            'id': id,
            creation: '02/02/02 02:02:02',
            nome: categoria.nome
          });
        }, delay);

        console.log('Finalizando salvar do serviço');
      }
    };
  });
})();