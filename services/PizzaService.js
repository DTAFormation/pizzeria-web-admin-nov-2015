angular.module('PizzaService', []).service('PizzaService', function($http,$q, pzConfig) {

  function handleResponse(response) {
    return response.data;
  }

  this.getPizzaList=function(){
    return $http.get(pzConfig.PIZZA_RESOURCE_URL)
    .then(handleResponse);
  };

});
