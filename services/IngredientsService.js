angular.module('IngredientsService', []).service('IngredientsService', function($http,$q, pzConfig) {

  function handleResponse(response) {
    return response.data
  }

  this.getIngredientList=function(){
    return $http.get(pzConfig.INGREDIENT_RESOURCE_URL)
    .then(handleResponse)
  }

    this.deleteIngredient=function(id){
    return $http.delete(pzConfig.INGREDIENT_RESOURCE_URL+'/'+id)
    .then(handleResponse)
  }

    this.updateIngredient=function(ingredient){
    return $http.put(pzConfig.INGREDIENT_RESOURCE_URL,ingredient)
    .then(handleResponse)
  }

  this.saveIngredient=function(ingredient){
    return $http.post(pzConfig.INGREDIENT_RESOURCE_URL,ingredient)
    .then(handleResponse)
  }

});
