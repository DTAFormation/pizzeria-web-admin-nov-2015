angular.module('pzWebAdminApp.order', [
  'ui.router',
  'PizzaService',
  'DrinkService',
  'CommandService',
  'CommandeService'
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

   $stateProvider
        .state("orderdelivered", {
            url: '/orderdelivered',
             templateUrl: 'order/views/list-order-delivered.html',
        controller: 'OrderDeliveredController',
        controllerAs: 'ctrl'
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
    vm.items = vm.pizzas.concat(vm.drinks);
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

angular.module('pzWebAdminApp.order').controller('OrderDeliveredController', function($state, CommandeService) {
  var self = this;
   $state.transitionTo('orderdelivered');

  self.title = "BLABLA";

self.select = function(commande){

  if(commande.etat=="LIVRAISON") {
      commande.etat="TERMINE";
    }
  else {
    commande.etat ="LIVRAISON";
    }
  CommandeService.updateCommande(commande);
};

CommandeService.getCommandesPretesLivraison().then(function(results){

self.commandesalivrer = results;

}.bind(this));

  // self.commandesalivrer = [
  //   {
  //     id:"1",
  //     id_Client: 1,
  //     type:"livraison",
  //     total:12.50,
  //     paiement:"espèces",
  //     paye:false,
  //     etat:"livraison"
  //   },
  //    {
  //     id:"2",
  //     id_Client: 12,
  //     type:"livraison",
  //     total:50.00,
  //     paiement:"carte",
  //     paye:true,
  //     etat:"prepare"
  //   },
  //    {
  //     id:"3",
  //     id_Client: 12,
  //     type:"livraison",
  //     total:100.20,
  //     paiement:"carte",
  //     paye:false,
  //     etat:"livraison"
  //   }
  // ]
});
