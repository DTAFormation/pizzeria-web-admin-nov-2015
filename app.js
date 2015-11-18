angular.module('pzWebAdminApp', [
    'ui.utils',
    'ngRoute',
    'ngAnimate',
    'ui.router',

    'pzWebAdminApp.shared',
    'pzWebAdminApp.filters',
    'pzWebAdminApp.home',
    'pzWebAdminApp.order',
    'pzWebAdminApp.product',
    'pzWebAdminApp.user',

    'ProductService',
    'PizzaService',
    'DrinkService',

    'CommandService',



    'DessertService',
    'IngredientsService',
    'CommandeService'

  ]);

angular.module('pzWebAdminApp').config(function($httpProvider,$urlRouterProvider, $locationProvider) {
  $httpProvider.defaults.headers.common = {};
//  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
    // $locationProvider.html5Mode(true);
    // Ici, les routes générales de l'application
    // Pas de route spécifique ici !
    // Elles doivent être déclarées dans des sous-modules (comme 'home')
    $urlRouterProvider.otherwise('/');
});

angular.module('pzWebAdminApp').run(function($rootScope) {

});

// Contrôleur qui pilote globalement l'application
angular.module('pzWebAdminApp').controller("pzWebAdminAppCtrl", function() {
    this.title = "Pizzeria Web Admin";
});
