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
      vm.currentMeal.pizza.nom = item.nom;
      }
    else {
      vm.currentMeal.drink.nom = item.nom;
      }
  };

  vm.validate = function() {

    vm.newOrder.total = "100";
    vm.newOrder.paiement = "CARTE";
    vm.newOrder.paye = "false";
    vm.newOrder.etat = "EN_COURS";
    CommandService.saveCommand(vm.newOrder);
  //  console.log(vm.newOrder);
    $state.transitionTo('order.form');


  };

  vm.save = function() {
    
    vm.newOrder.produits.push(vm.currentMeal.pizza);
    vm.newOrder.produits.push(vm.currentMeal.drink);
    vm.currentMeal=null;
  };

  vm.setPrice = function() {

  }

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
