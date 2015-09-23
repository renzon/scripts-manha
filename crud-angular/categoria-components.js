(function () {
  var categoriaComponents = angular.module('categoria-components', []);

  categoriaComponents.directive('categoriaForm', function () {
    return {
      restric: 'E',
      templateUrl: 'categoria-form.html',
      replace: true,
      scope: {},
      controller: function ($scope) {
        $scope.categoria = {nome: 'Roger'};

        $scope.salvar = function () {
          console.log($scope.categoria);
        }

      }
    };
  });
})();