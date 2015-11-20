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
        })
        .catch(function(response){
            console.log(response.data);
            handleError(response.data.errors);
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
        })
        .catch(function(){});
    }
    ctrl.delete=function(){
        userService.deleteUser(ctrl.user.id).then(function(){
            $state.transitionTo("user");
        });
    }
})

function handleError(errors){
    msg="";
    for (var i = errors.length - 1; i >= 0; i--) { 
        switch(errors[i].field){
            case "login" : msg+="L'identifiant doit faire au moins 5 caractères et ne doit pas comporter de caractères spéciaux\n"; break;
            case "mdp": msg+="Le mot de passe doit faire au moins 5 caractères et ne doit pas comporter de caractères spéciaux\n"; break;
            case "tel": msg+="Numéro de téléphone mal formaté\n"; break;
        }
    };
    alert(msg); 
   
}