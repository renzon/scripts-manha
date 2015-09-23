(function () {
  var categoriaServicos = angular.module('categoria-servicos', []);

  categoriaServicos.factory('CategoriaAPI', function ($rootScope) {
    return {
      salvar: function (categoria, callbackSucesso) {
        const delay = 2000;
        console.log('Chamada ajax fake para salvar inciando');
        var id = 0;
        setTimeout(function () {
          id++;
          if (callbackSucesso) {

            const categoriaDoServidor = {
              'id': id,
              creation: '02/02/02 02:02:02',
              nome: categoria.nome
            };
            callbackSucesso(categoriaDoServidor);
            $rootScope.$digest();
          }
        }, delay);

        console.log('Finalizando salvar do serviço');
      }
    };
  });
})();