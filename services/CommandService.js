angular.module('CommandService', []).service('CommandService', function($http) {
  var s = this;

  var url = "http://localhost:8080/commande";

  s.saveCommand = function(command) {
    console.log(command);
    return $http.post(url, command).then(
      function Success(response) {
        console.log(response);
    }, function Error(response) {
      console.log(response);
    }
  );
  };
});
