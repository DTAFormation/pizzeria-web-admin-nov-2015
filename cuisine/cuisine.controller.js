angular.module('pzWebAdminApp.cuisine', [
  'ui.router',
  'PizzaService',
  'CommandePizzaService'
]);
angular.module('pzWebAdminApp.cuisine').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('cuisine', {
    url: '/cuisine',
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
  CommandePizzaService.getCommandesPizzas()
  .then(function(commandes){
    vm.commandesPizza = commandes;
  }.bind(this))
  });