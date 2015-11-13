// Déclaration du module 'home'
angular.module('pzWebAdminApp.home', [
    'ngRoute',
    'pzWebAdminApp.shared'
]);

// Configuration du module 'home'
angular.module('pzWebAdminApp.home').config(function($routeProvider) {

    // TODO Définir les routes spécifiques au module 'home' ici
    $routeProvider
        .when("/home",{
            templateUrl:"home/template/home.tpl.html",
            controller:"homeCtrl",
            controllerAs: "ctrl"
        });
});

// Contrôleur principal du module 'home'
// Usage de la syntaxe 'controller as', pas besoin du '$scope'
angular.module('pzWebAdminApp.home').controller('homeCtrl', function(userService) {

    var self = this;

    self.title = "Page Home";

    // ...

});
