import angular from 'angular';

class PizzaService {
  constructor() {
    console.log("wefwefwf");
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
  }
}

export default angular.module('services.pizzaservice', [])
.service('PizzaService', PizzaService)
.name;
