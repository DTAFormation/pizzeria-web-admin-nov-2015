angular.module('DrinkService', []).service('DrinkService', function($http) {

  var s = this;
  var url = "http://localhost:8080/drink";

    s.getDrinks = function() {
      return $http.get(url).then(function Success(response) {
        return response.data;
          });
        };
});
