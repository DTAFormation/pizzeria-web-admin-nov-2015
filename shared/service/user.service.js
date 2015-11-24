angular.module('pzWebAdminApp.shared').service('userService', function($http, $q) {

    var url="http://localhost:8080/user";

    function handleResponse(response) {
        return response.data;
    }

    this.isConnected = function() {
        return sessionStorage.connected;
    };

    this.getType=function(){
        return sessionStorage.type;
    }

    this.getPrenom=function(){
        return sessionStorage.prenom;
    }

    this.isAdmin=function(){
        return sessionStorage.type=="ADMINISTRATEUR";
    }

    this.login = function(login, password) {
        return $http.post(url+"/login",{"login":login,"password":password})
            .then(function(response){
                user=response.data;
                if(user){
                    sessionStorage.prenom=user.prenom;
                    sessionStorage.type=user.type;
                    sessionStorage.connected=true;
                    console.log(sessionStorage.connected);
                    console.log(user);
                }
            },function(response){console.log(response)});
    };

    this.logout = function() {
        delete sessionStorage.connected;
        delete sessionStorage.type;
        delete sessionStorage.prenom;
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
