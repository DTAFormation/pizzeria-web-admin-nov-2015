angular.module('CommandService', []).service('CommandService', function($http, pzConfig) {
  var s = this;

  s.saveCommand = function(command) {
    console.log(command);
    return $http.post(pzConfig.COMMAND_RESOURCE_URL, command).then(
      function Success(response) {
        console.log(response);
      }, function Error(response) {
        console.log(response);
      }
    );
  };

  function handleResponse(response) {
    return response.data
  }

  this.getCommandesPretesLivraison= function () {
    return $http.get(pzConfig.COMMAND_RESOURCE_URL+'/pretes/livraison')
    .then(handleResponse)
  }

  this.getCommandesPretesCaisse= function () {
    return $http.get(pzConfig.COMMAND_RESOURCE_URL+'/pretes/caisse')
    .then(handleResponse)
  }

  this.getCommandesPizzasEnCours = function () {
    return $http.get(pzConfig.COMMAND_RESOURCE_URL+'/enCours')
    .then(handleResponse);
  }

  this.updateCommande= function (commande) {
    return $http.put(pzConfig.COMMAND_RESOURCE_URL, commande)
    .then(handleResponse)
  }
});
