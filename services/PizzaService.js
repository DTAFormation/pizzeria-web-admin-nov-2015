angular.module('PizzaService', []).service('PizzaService', function($http) {

    this.pizzas = [
      {
        "id":"1",
        "nom":"Margarita",
        "type":"PIZZA"
      },
      {
         "id":"2",
        "nom":"Extravaganzza",
        "type":"PIZZA"
      },
      {
         "id":"3",
        "nom":"Cannibale",
        "type":"PIZZA"
      },
      {
         "id":"4",
        "nom":"Indienne",
        "type":"PIZZA"
      },
      {
         "id":"5",
        "nom":"Bacon Groovy",
        "type":"PIZZA"
      }
    ];

    this.getPizzas = function() {
      return this.pizzas;
    };

});
