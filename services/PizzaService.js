angular.module('PizzaService', []).service('PizzaService', function($http) {

    var s = this;
    var url = "http://localhost:8080/";
    s.pizzas = [
      {
        "Nom":"Margarita",
        "type":"PIZZA"
      },
      {
        "Nom":"Extravaganzza",
        "type":"PIZZA"
      },
      {
        "Nom":"Cannibale",
        "type":"PIZZA"
      },
      {
        "Nom":"Indienne",
        "type":"PIZZA"
      },
      {
        "Nom":"Bacon Groovy",
        "type":"PIZZA"
      }
    ];

    s.handleResponse = function(reponse) {
      return reponse.data;
    };

    s.getPizzas = function() {
      return $http.get(url+"pizza").then(function success(response) {
        return response.data;
      });
      // return this.pizzas;
    };

});
