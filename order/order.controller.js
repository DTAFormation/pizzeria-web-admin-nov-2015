angular.module('pzWebAdminApp.order', [
  'ui.router',
  'PizzaService',
  'DrinkService'
]);
angular.module('pzWebAdminApp.order').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('order', {
    url: '/order',
    abstrat: true,
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

  vm.currentOrder= [];
  vm.newOrder = [];
  vm.pizzas = PizzaService.getPizzas();

  vm.drinks = DrinkService.getDrinks();

vm.items = vm.pizzas.concat(vm.drinks);
  vm.select = function(item) {
    if ("pizza" === item.type)
      vm.currentOrder.pizzaName = item.name;
    else
      vm.currentOrder.drinkName = item.name;
  };

  vm.validate = function() {
    console.log(vm.newOrder);
    $state.transitionTo('order.form');
  };

  vm.save = function() {
    vm.newOrder.push(vm.currentOrder);
  }

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
