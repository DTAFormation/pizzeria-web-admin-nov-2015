angular.module('DessertService', []).service('DessertService', function($http,$q) {

  function handleResponse(response) {
    return response.data
  }

  this.getDessertList=function(){
    return $http.get('http://localhost:8080/dessert')
    .then(handleResponse)
  }

});
