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

    ctrl.types=[{key:"ADMINISTRATEUR",value:"Administrateur"},{key:"EMPLOYEE",value:"Employée"}];
    
    userService.findAll().then(function(response){ctrl.users=response});

    ctrl.save=function(){
        userService.addUser(ctrl.user).then(function(){
            $state.transitionTo("user");
        });
    }
});

angular.module("pzWebAdminApp.user").controller("modifyUserController",function($state,$stateParams,userService){
    var ctrl=this;
    var id=$stateParams.id;

    userService.findOne(id).then(function(response){ctrl.user=response});

    ctrl.types=[{key:"ADMINISTRATEUR",value:"Administrateur"},{key:"EMPLOYEE",value:"Employée"}];
    
    ctrl.save=function(){
        userService.updateUser(ctrl.user).then(function(){
            $state.transitionTo("user");
        });
    }
    ctrl.delete=function(){
        userService.deleteUser(ctrl.user.id).then(function(){
            $state.transitionTo("user");
        });
    }
})
