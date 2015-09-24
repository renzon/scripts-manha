(function () {
  var categoriaComponents = angular.module('categoria-components', ['categoria-servicos']);

  categoriaComponents.directive('categoriaForm', function () {
    return {
      restric: 'E',
      templateUrl: 'categoria-form.html',
      replace: true,
      scope: {},
      controller: function ($scope, CategoriaAPI) {
        $scope.categoria = {nome: 'Roger'};
        $scope.erros = {};

        $scope.salvar = function () {
          $scope.erros = {};
          CategoriaAPI.salvar($scope.categoria, function (categoriaSalva) {
            console.log(categoriaSalva);

            },
            function (erros) {
              $scope.erros = erros;
              console.log(erros);
          });
        }

      }
    };
  });
})();