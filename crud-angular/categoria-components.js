(function () {
  var categoriaComponents = angular.module('categoria-components', []);

  categoriaComponents.directive('categoriaForm', function () {
    return {
      restric: 'E',
      templateUrl: 'categoria-form.html',
      replace: true
    };
  });
})();