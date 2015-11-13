angular.module('PizzaService', []).service('PizzaService', function($http) {

    this.pizzas = [
      {
        "name":"Margarita"
      },
      {
        "name":"Extravaganzza"
      },
      {
        "name":"Cannibale"
      }
    ];

    this.getPizzas = function() {
      return this.pizzas;
    };
    
});
