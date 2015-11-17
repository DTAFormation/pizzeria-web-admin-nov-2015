angular.module('DrinkService', []).service('DrinkService', function($http) {

  var s = this;
  var url = "http://localhost:8080/drink";
    this.drinks = [
      {
        "Nom":"Pina Colada",
          "type":"BOISSON"
      },
      {
        "Nom":"Jus d'ananus",
          "type":"BOISSON"
      },
      {
        "Nom":"7up",
        "type":"BOISSON"
      },
      {
        "Nom":"Canada Dry",
          "type":"BOISSON"
      }
    ];

    s.getDrinks = function() {
      return $http.get(url).then(function Success(response) {
        return response.data;
          });
        };
});
