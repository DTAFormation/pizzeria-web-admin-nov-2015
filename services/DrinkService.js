angular.module('DrinkService', []).service('DrinkService', function($http,$q, pzConfig) {
  
  function handleResponse(response) {
    return response.data;
  }

  this.getDrinkList=function(){
    return $http.get(pzConfig.DRINK_RESOURCE_URL)
    .then(handleResponse);
  };


});
