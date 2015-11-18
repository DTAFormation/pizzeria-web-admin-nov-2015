angular.module('pzWebAdminApp.shared').service('userService', function($http, $q) {

    var connected = false;
    var url="http://localhost:8080/user";

    function handleResponse(response) {
        // console.log("Success !")
        return response.data
    }

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
        return $http.get(url +"/"+ id)
            .then(handleResponse);
    };
    this.findAll=function(){
        return $http.get(url)
            .then(handleResponse);
    };
    this.addUser=function(user){
        return $http.post(url,user)
            .then(handleResponse);
    };
    this.updateUser=function(user){
        return $http.put(url,user)
            .then(handleResponse);
    };

    this.deleteUser=function(id){
        return $http.delete(url +"/"+ id)
            .then(handleResponse);
    };
});
