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
        $scope.categoriaSalva = {};
        $scope.salvar = function () {
          CategoriaAPI.salvar($scope.categoria, function (categoriaSalva) {
            $scope.categoriaSalva = categoriaSalva;
            console.log(categoriaSalva);
          });
        }

      }
    };
  });
})();