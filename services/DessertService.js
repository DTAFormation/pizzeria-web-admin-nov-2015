angular.module('DessertService', []).service('DessertService', function($http,$q, pzConfig) {

  function handleResponse(response) {
    return response.data
  }

  this.getDessertList=function(){
    return $http.get(pzConfig.DESSERT_RESOURCE_URL)
    .then(handleResponse)
  }

});
