angular.module('pzWebAdminApp.user', [
  'ui.router'
]);
angular.module('pzWebAdminApp.user').config(function($stateProvider) {

    // TODO Définir les routes spécifiques au module 'home' ici
    $stateProvider
        .state("user", {
            url: '/utilisateurs',
            templateUrl:"user/views/user.html",
            controller:"userController",
            controllerAs: "ctrl"
        })
        .state("add", {
            url: '/utilisateurs/ajouter',
            templateUrl:"user/views/user.add.html",
            controller:"userController",
            controllerAs: "ctrl"
        }).state("modify", {
            url: '/utilisateurs/modifier/:id',
            templateUrl:"user/views/user.update.html",
            controller:"modifyUserController",
            controllerAs: "ctrl"
        });
});
angular.module("pzWebAdminApp.user").controller("userController",function($state,userService){
	var ctrl=this;


    ctrl.types=["Administrateur","Utilisateur"];
	ctrl.users=[{nom:"simon",type:"admin"},{nom:"olivier",type:"paysan"}];

    ctrl.save=function(){
        userService.addUser(ctrl.user);
    }
});
angular.module("pzWebAdminApp.user").controller("modifyUserController",function($state,$routeParams,userService){
    var ctrl=this;
    var idUser=$routeParams.id;

    ctrl.user=userService.findOne(idUser);
    ctrl.types=["Administrateur","Utilisateur"];
    
})
