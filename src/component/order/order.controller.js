export default class OrderController {
  constructor(PizzaService) {
    this.pizzas = PizzaService.pizzas;
  }



}

OrderController.$inject =['PizzaService'];
