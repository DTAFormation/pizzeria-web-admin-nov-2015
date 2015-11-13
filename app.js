angular.module('pzWebAdminApp', [
    'ui.utils',
    'ngRoute',
    'ngAnimate',
    'pzWebAdminApp.shared',
    'pzWebAdminApp.home',
    'pzWebAdminApp.order',
    'ui.router'
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
