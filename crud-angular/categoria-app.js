(function () {

  var categoriaApp = angular.module('categoriaApp', ['categoria-components']);

  categoriaApp.controller('CategoriaCtrl', function ($scope) {
    $scope.categoria = {'nome': 'Veronica'};

  });
})();
