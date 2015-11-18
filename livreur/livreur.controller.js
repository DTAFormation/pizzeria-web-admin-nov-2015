angular.module('pzWebAdminApp.livreur', [
  'ui.router',
  'CommandeLivreurService',
  
]);
angular.module('pzWebAdminApp.livreur').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('livreur', {
    url: '/livreur',
    views: {
      "": {
        templateUrl: 'livreur/views/livreur.html',
        controller: 'LivreurController',
        controllerAs: 'ctrl'
      }
    }
  })

  });



angular.module('pzWebAdminApp.livreur').controller('LivreurController', function($state, CommandeLivreurService) {
  var vm = this;
  CommandeLivreurService.getCommandesLivreurs()
  .then(function(commandes){
    vm.commandesLivreur = commandes;
  }.bind(this))
  
});