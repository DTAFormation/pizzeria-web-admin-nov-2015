angular.module('ProductService', []).service('ProductService', function($http,$q, pzConfig) {

  function handleResponse(response) {
    return response.data
  }

  this.deleteProduct=function(id){
    return $http.delete(pzConfig.PRODUCT_RESOURCE_URL+'/'+id)
    .then(handleResponse)
  }

  this.updateProduct=function(produit){
    return $http.put(pzConfig.PRODUCT_RESOURCE_URL,produit)
    .then(handleResponse)
  }

  this.saveProduct=function(produit){
    return $http.post(pzConfig.PRODUCT_RESOURCE_URL,produit)
    .then(handleResponse)
  }
});