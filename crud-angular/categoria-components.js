(function () {
  var categoriaComponents = angular.module('categoria-components', ['categoria-servicos']);

  categoriaComponents.directive('categoriaForm', function () {
    return {
      restric: 'E',
      templateUrl: 'categoria-form.html',
      replace: true,
      scope: {
        salvarCategoriaListener: '&'
      },
      controller: function ($scope, CategoriaAPI) {
        $scope.categoria = {nome: 'Roger'};
        $scope.erros = {};
        $scope.salvandoCategoriaFlag = false;

        $scope.salvar = function () {
          $scope.erros = {};
          $scope.salvandoCategoriaFlag = true;
          CategoriaAPI.salvar($scope.categoria, function (categoriaSalva) {
              $scope.salvarCategoriaListener({'categoria': categoriaSalva});

            },
            function (erros) {
              $scope.erros = erros;
              console.log(erros);
            }, function () {
              $scope.salvandoCategoriaFlag = false;
            });
        }

      }
    };
  });


  categoriaComponents.directive('categoriaTabela', function () {
    return {
      restric: 'E',
      templateUrl: 'categoria-tabela.html',
      replace: true,
      scope: {
        categorias: '='
      },
      controller: function ($scope, CategoriaAPI) {

      }

    };
  });
})();