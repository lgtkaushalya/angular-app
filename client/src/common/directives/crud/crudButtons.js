angular.module('directives.crud.buttons', [])

.directive('crudButtons', function () {
  return {
    restrict:'E',
    templateUrl: 'directives/crud/crudButtons.tpl.html'
  };
});