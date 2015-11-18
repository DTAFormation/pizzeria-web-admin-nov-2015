angular.module('ProductService', []).service('ProductService', function($http,$q) {

  function handleResponse(response) {
    return response.data
  }

  this.deleteProduct=function(id){
    return $http.delete('http://localhost:8080/product/'+id)
    .then(handleResponse)
  }

  this.updateProduct=function(produit){
    return $http.put('http://localhost:8080/product',produit)
    .then(handleResponse)
  }

  this.saveProduct=function(produit){
    return $http.post('http://localhost:8080/product',produit)
    .then(handleResponse)
  }
});