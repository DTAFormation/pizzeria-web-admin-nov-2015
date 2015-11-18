angular.module('CommandeService', []).service('CommandeService', function($http) {

  	this.handleResponse = function(response) {
        return response.data
    }
       

	var url = "http://localhost:8080/commandesPretes";



		this.getCommande = function(){

			return $http.get(url)
			.then(this.handleResponse)
	}

})