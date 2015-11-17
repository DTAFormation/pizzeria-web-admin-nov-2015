angular.module('IngredientsService', []).service('IngredientsService', function($http,$q) {

  function handleResponse(response) {
    return response.data
  }

  this.getIngredientList=function(){
    return $http.get('http://localhost:8080/ingredient')
    .then(handleResponse)
  }

    this.deleteIngredient=function(id){
    return $http.delete('http://localhost:8080/ingredient/'+id)
    .then(handleResponse)
  }

    this.updateIngredient=function(ingredient){
    return $http.put('http://localhost:8080/ingredient',ingredient)
    .then(handleResponse)
  }

  this.saveIngredient=function(ingredient){
    return $http.post('http://localhost:8080/ingredient',ingredient)
    .then(handleResponse)
  }

});
