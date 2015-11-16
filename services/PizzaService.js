angular.module('PizzaService', []).service('PizzaService', function($http) {

    this.pizzas = [
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

    this.getPizzas = function() {
      return this.pizzas;
    };

});
