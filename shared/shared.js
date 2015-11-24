angular.module('pzWebAdminApp.shared', [

]);
angular.module('pzWebAdminApp.shared').config(function($stateProvider) {

    // TODO Définir les routes spécifiques au module 'home' ici
    $stateProvider
        .state("login", {
            url: '/connexion',
            templateUrl:"shared/views/login.html",
            controller:"loginController",
            controllerAs: "ctrl"
        }).state("logout", {
            url: '/deconnexion',
            // templateUrl:"shared/views/login.html",
            controller:"logoutController",
            controllerAs: "ctrl"
        });
});

angular.module("pzWebAdminApp.shared").controller("loginController",function($state,userService,$scope){
	var ctrl=this;

    ctrl.login=function(){
    	userService.login(ctrl.identifiant,ctrl.mdp).then(function(response){
    		console.log(response);
            // $scope.connected=userService.isConnected();
            // $scope.isAdmin=userService.isAdmin();
            // $scope.$apply();
            $state.transitionTo("home");
    	});
    }
    
});
angular.module("pzWebAdminApp.shared").controller("logoutController",function($state,userService,$scope){
    var ctrl=this;

    userService.logout();
    console.log($scope);
    // $scope.connected=userService.isConnected();
    // $scope.isAdmin=userService.isAdmin();
    // $scope.$apply();
    $state.transitionTo("login");
});