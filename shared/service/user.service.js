angular.module('pzWebAdminApp.shared').service('userService', function($http, $q) {

    var connected = false;
    var url="http://localhost:3000/steps";

    this.isConnected = function() {
        return connected;
    };

    this.login = function(login, password) {
        // TODO : Gestion de la connexion
    };

    this.logout = function() {
        // TODO Gestion de la déconnexion
    };


    this.findOne=function(id){
        // return $http.get(url+id);
        return {nom:"bob",prenom:"Bankrout",password:"bb",type:"catcheur"};
    };
    this.findAll=function(){
        return $http.get(url);
    };
    this.addUser=function(user){
        /*return $http.post(url,user).then(function(response){
            return response.data;
        });*/
        console.log(user);
    };
    this.updateUser=function(user){
        return $http.put(url,user).then(function(response){
            return response.data;
        });
    };
});
