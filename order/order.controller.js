angular.module('pzWebAdminApp.order', [
  'ui.router',
  'PizzaService',
  'DrinkService',
  'CommandeService'
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
      // 'newOrderForm@order': {
      //   templateUrl: 'order/views/form.order.html'
      // },
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
  })
  .state('orderReady', {
    url: '/ready',
    views: {
      "": {
        templateUrl: 'order/viewsReady/liste.order.html',
        controller: 'ReadyController',
        controllerAs: 'ctrl'
      }
    }
  });
});

angular.module('pzWebAdminApp.order').controller('OrderController', function($state, PizzaService, DrinkService) {
  var vm = this;
  $state.transitionTo('order.form');

  vm.newOrder = [];
  vm.pizzas = PizzaService.getPizzas();

  vm.drinks = DrinkService.getDrinks();

vm.items = vm.pizzas.concat(vm.drinks);
  vm.select = function(item) {
    if ("pizza" === item.type)
      vm.newOrder.pizzaName = item.name;
    else
      vm.newOrder.drinkName = item.name;
  };

  vm.save = function() {
    console.log(vm.newOrder);
    $state.transitionTo('order.form');
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
