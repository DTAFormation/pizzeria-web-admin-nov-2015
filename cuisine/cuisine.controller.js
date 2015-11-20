angular.module('pzWebAdminApp.cuisine', [
  'ui.router',
  'PizzaService'
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



angular.module('pzWebAdminApp.cuisine').controller('CuisineController', function($state, CommandService) {
  var vm = this;

  vm.updatePage = function(){
    CommandService.getCommandesPizzasEnCours()
    .then(function(commandes, pizzas){
      vm.commandesPizza = commandes;
    }.bind(this))
  }

  vm.updatePage();

  this.validerPreparation = function(commande){
      commande.etat="PREPARE";
      CommandService.updateCommande(commande)
        .then(function success(response){
          vm.updatePage();
        })
    }
  });