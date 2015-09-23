(function () {
  var categoriaComponents = angular.module('categoria-components', []);

  categoriaComponents.directive('categoriaForm', function () {
    return {
      restric: 'E',
      template: '<button class="btn btn-danger btn-sm"><i class="glyphicon glyphicon-trash"></i></button>',
      replace: true
    };
  });
})();