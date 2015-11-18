angular.module('pzWebAdminApp.order', [
  'ui.router',
  'PizzaService',
  'DrinkService',
  'CommandService'
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

angular.module('pzWebAdminApp.order').controller('OrderController', function($state, PizzaService, DrinkService, CommandService) {
  var vm = this;
  $state.transitionTo('order.form');

  vm.currentMeal=[];

  vm.currentMeal.pizza={};
  vm.currentMeal.drink={};

  vm.newOrder = {};
    vm.newOrder.total = 0;
  vm.newOrder.produits = [];

  PizzaService.getPizzas().then(function Success(results) {
      vm.pizzas = results;
      DrinkService.getDrinks().then(function Success(results) {
        vm.drinks = results;
        vm.items = vm.pizzas.concat(vm.drinks);
      });
  });


  vm.select = function(item) {
    if ("PIZZA" === item.type) {
      vm.currentMeal.pizza = item;
      }
    else {
      vm.currentMeal.drink = item;
      }

      // vm.currentMeal.total = (angular.isUndefined(vm.currentMeal.pizza.prix) ? 0 : vm.currentMeal.pizza.prix) +
      //                          (angular.isUndefined(vm.currentMeal.drink.prix) ? 0 : vm.currentMeal.drink.prix);
  };

  vm.validate = function() {

    vm.newOrder.paye = "false";
    vm.newOrder.etat = "EN_COURS";
    CommandService.saveCommand(vm.newOrder);
    $state.transitionTo('order.form');


  };

  vm.save = function() {
    for (var i in vm.pizzas) {
      if (vm.pizzas[i].nom === vm.currentMeal.pizza.nom &&
          vm.pizzas[i].taille === vm.currentMeal.taille) {
        vm.currentMeal.pizza = vm.pizzas[i];
      }
    }
    for (var j in vm.drinks) {
      if (vm.drinks[j].nom === vm.currentMeal.drink.nom &&
          vm.drinks[j].format === vm.currentMeal.format) {
        vm.currentMeal.drink = vm.drinks[j];
      }
    }
    vm.newOrder.produits.push(vm.currentMeal.pizza);
    vm.newOrder.produits.push(vm.currentMeal.drink);
    vm.newOrder.total += (angular.isUndefined(vm.currentMeal.pizza.prix) ? 0 : vm.currentMeal.pizza.prix) +
                             (angular.isUndefined(vm.currentMeal.drink.prix) ? 0 : vm.currentMeal.drink.prix);
    vm.currentMeal.pizza = null;
    vm.currentMeal.drink = null;
  };

  vm.listAll = function() {
    //vm.items = vm.pizzas.concat(vm.drinks);
    console.log(vm.pizzas);
    vm.items = vm.pizzas;
  };
  vm.listDrinks = function() {
    vm.items = vm.drinks;
  };
  vm.listPizzas = function() {
    vm.items = vm.pizzas;
  };
});
