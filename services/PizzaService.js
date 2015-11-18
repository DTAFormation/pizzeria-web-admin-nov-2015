angular.module('PizzaService', []).service('PizzaService', function($http,$q) {
  var url = 'http://localhost:8080/pizza';

  function handleResponse(response) {
    return response.data;
  }

  this.getPizzaList=function(){
    return $http.get('http://localhost:8080/pizza')
    .then(handleResponse);
  };

});
