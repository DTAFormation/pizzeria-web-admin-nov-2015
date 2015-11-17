angular.module('pzWebAdminApp.livreur', [
  'ui.router',
  'CommandeLivreurService',
  
]);
angular.module('pzWebAdminApp.livreur').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('livreur', {
    url: '/livreur',
    abstrat: true,
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
  vm.commandes_livreur = CommandeLivreurService.getCommandesLivreurs();
  
  });