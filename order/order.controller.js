angular.module('pzWebAdminApp.order', [
  'ui.router',
  'PizzaService',
  'DrinkService'
]);
angular.module('pzWebAdminApp.order').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('order', {
    url: '/order',
    abstract: true,
    views: {
      "": {
        templateUrl: 'order/views/order.html',
        controller: 'OrderController',
        controllerAs: 'ctrl'
      }
    }
  })
  .state('order.form', {
    url: '',
    views: {
      'info@order': {
        templateUrl: 'order/views/info.order.html'
      }
    }
  })
  .state('order.menu', {
    views: {
      'newOrderForm': {
        templateUrl: 'order/views/menu.order.html'
      }
    }
  })
  .state('order.pizza', {
    views: {
      'newOrderForm': {
        templateUrl: 'order/views/pizza.order.html'
      }
    }
  });
});

angular.module('pzWebAdminApp.order').controller('OrderController', function($state, PizzaService, DrinkService) {
  var vm = this;
  $state.transitionTo('order.form');

  vm.currentMeal= [];

  vm.newOrder = [];
  vm.newOrder.products = [];
  vm.pizzas = PizzaService.getPizzas();

  vm.drinks = DrinkService.getDrinks();

  vm.items = vm.pizzas.concat(vm.drinks);
  vm.select = function(item) {
    if ("PIZZA" === item.type) {
      vm.currentMeal.pizzaName = item.Nom;
      }
    else {
      vm.currentMeal.drinkName = item.Nom;
      }
  };

  vm.validate = function() {
    $state.transitionTo('order.form');
    console.log(vm.newOrder.products);
  };

  vm.save = function() {

    // vm.newOrder.push({
    //   pizzaName: vm.currentMeal.pizzaName,
    //   drinkName: vm.currentMeal.drinkName
    // });
    vm.newOrder.products.push(vm.currentMeal.pizzaName);
    vm.currentMeal.pizzaName = "";
    vm.currentMeal.drinkName = "";
  };

  vm.listAll = function() {
    vm.items = vm.pizzas.concat(vm.drinks);
  };
  vm.listDrinks = function() {
    vm.items = vm.drinks;
  };
  vm.listPizzas = function() {
    vm.items = vm.pizzas;
  };
});
