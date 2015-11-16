angular.module('pzWebAdminApp.user', [
  'ui.router'
]);
angular.module('pzWebAdminApp.user').config(function($stateProvider) {

    // TODO Définir les routes spécifiques au module 'home' ici
    $stateProvider
        .state("user", {
            url: '/Utilisateurs',
            templateUrl:"user/views/user.html",
            controller:"userController",
            controllerAs: "ctrl"
        });
});
angular.module("pzWebAdminApp.user").controller("userController",function($state){
	var ctrl=this;

	ctrl.users=[{nom:"simon",type:"admin"},{nom:"olivier",type:"paysan"}];
});
