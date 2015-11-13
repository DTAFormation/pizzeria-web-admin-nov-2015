angular.module('pzWebAdminApp', [
    'ui.utils',
    'ngRoute',
    'ngAnimate',
    'pzWebAdminApp.shared',
    'pzWebAdminApp.home'
]);

angular.module('pzWebAdminApp').config(function($routeProvider) {

    // Ici, les routes générales de l'application
    // Pas de route spécifique ici !
    // Elles doivent être déclarées dans des sous-modules (comme 'home')
    $routeProvider.otherwise({redirectTo:'/home'});
});

angular.module('pzWebAdminApp').run(function($rootScope) {

});

// Contrôleur qui pilote globalement l'application
angular.module('pzWebAdminApp').controller("pzWebAdminAppCtrl", function() {
    this.title = "Pizzeria Web Admin";
});