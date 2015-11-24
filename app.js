angular.module('pzWebAdminApp', [
    'ui.utils',
    'ngRoute',
    'ui.router',
    'ui.bootstrap',


    'pzWebAdminApp.shared',
    'pzWebAdminApp.filters',
    'pzWebAdminApp.home',
    'pzWebAdminApp.order',
    'pzWebAdminApp.product',
    'pzWebAdminApp.user',
    'ProductService',
    'PizzaService',
    'DrinkService',
    'DessertService',
    'IngredientsService',
    'CommandService',
    'pzWebAdminApp.cuisine',
    'pzWebAdminApp.filters'
  ]);

angular.module('pzWebAdminApp').config(function($urlRouterProvider, $locationProvider) {
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
