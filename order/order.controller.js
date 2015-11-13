angular.module('pzWebAdminApp.order', [
  'ui.router',
  'PizzaService'
]);
angular.module('pzWebAdminApp.order').config(function($stateProvider) {
  $stateProvider
  .state('order', {
    url: '/order',
    templateUrl: 'order/views/order.html',
    controller: 'OrderController',
    controllerAs: 'ctrl'
  });
});
angular.module('pzWebAdminApp.order').controller('OrderController', function(PizzaService) {
  var vm = this;

  vm.pizzas = PizzaService.getPizzas();


});
