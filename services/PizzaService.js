angular.module('PizzaService', []).service('PizzaService', function($http) {

    this.pizzas = [
      {
        "name":"Margarita",
        "type":"pizza"
      },
      {
        "name":"Extravaganzza",
        "type":"pizza"
      },
      {
        "name":"Cannibale",
        "type":"pizza"
      },
      {
        "name":"Indienne",
        "type":"pizza"
      },
      {
        "name":"Bacon Groovy",
        "type":"pizza"
      }
    ];

    this.getPizzas = function() {
      return this.pizzas;
    };

});
