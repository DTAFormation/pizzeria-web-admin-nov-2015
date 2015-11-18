angular.module('UserService', []).service('UserService', function($http) {
	
	var url="http://localhost:3000/steps";

	this.findOne=function(id){
		return $http.get(url+id);
	}
	this.findAll=function(){
		return $http.get(url);
	}
	this.addUser=function(user){
		/*return $http.post(url,user).then(function(response){
			return response.data;
		});*/
		console.log(user);
	}
	this.updateUser=function(user){
		return $http.put(url,user).then(function(response){
			return response.data;
		});
	}
});
