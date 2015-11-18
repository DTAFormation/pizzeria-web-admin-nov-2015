angular.module('DrinkService', []).service('DrinkService', function($http,$q) {

  var url = "http://localhost:8080/drink";

  function handleResponse(response) {
    return response.data;
  }

  this.getDrinkList=function(){
    return $http.get('http://localhost:8080/drink')
    .then(handleResponse);
  };


});
