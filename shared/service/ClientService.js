angular.module('pzWebAdminApp.shared').service('ClientService', function($http) {
  var url = 'http://localhost:8080/client/';

  function handleResponse(response) {
      // console.log("Success !")
      return response.data;
  }

  this.findOneByNomAndPrenom = function(client) {
    return $http.post(url+'search', client)
    .then(handleResponse);
  };
});
