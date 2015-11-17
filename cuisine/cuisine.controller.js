angular.module('pzWebAdminApp.cuisine', [
  'ui.router',
  'PizzaService',
  'CommandePizzaService'
]);
angular.module('pzWebAdminApp.cuisine').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('cuisine', {
    url: '/cuisine',
    abstrat: true,
    views: {
      "": {
        templateUrl: 'cuisine/views/cuisine.html',
        controller: 'CuisineController',
        controllerAs: 'ctrl'
      }
    }
  })

  });



angular.module('pzWebAdminApp.cuisine').controller('CuisineController', function($state, CommandePizzaService) {
  var vm = this;
  vm.commandes_pizzas = CommandePizzaService.getCommandesPizzas();
  
  });