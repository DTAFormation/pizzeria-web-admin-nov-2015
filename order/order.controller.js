angular.module('pzWebAdminApp.order', [
  'ui.router',
  'PizzaService',
  'DrinkService',
  'CommandService',
  'DessertService',
  'pzWebAdminApp.shared'
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
  .state('order.menu', {
    url: "",
    views: {
      'newOrderForm': {
        templateUrl: 'order/views/menu.order.html'
      }
      // 'clientForm@order.menu': {
      //   tremplateUrl: 'order/views/client.order.html'
      // }
    }
  })
  .state('order.clientForm', {
    parent:'order.menu',
    views: {
      'clientForm': {
        tremplateUrl: 'order/views/client.order.html'
      }
    }
  })
  .state('orderReady', {
    url: '/ready',
    templateUrl: 'order/viewsReady/liste.order.html',
    controller: 'ReadyController',
    controllerAs: 'ctrl'
  })

.state("orderdelivered", {
            url: '/orderdelivered',
             templateUrl: 'order/views/list-order-delivered.html',
        controller: 'OrderDeliveredController',
        controllerAs: 'ctrl'
        });



});

angular.module('pzWebAdminApp.order').controller('OrderController', function($state, PizzaService, DrinkService, CommandService, DessertService, userService) {
  var vm = this;
  $state.transitionTo('order.menu');

  vm.currentMeal=[];

  vm.currentMeal.pizza={};
  vm.currentMeal.drink={};
  vm.currentMeal.dessert={};

  vm.newOrder = {};
    vm.newOrder.total = 0;
  vm.newOrder.produits = [];

  PizzaService.getPizzaList().then(function Success(results) {
      vm.pizzas = results;
      DrinkService.getDrinkList().then(function Success(results) {
        vm.drinks = results;
        DessertService.getDessertList().then(function Success(results) {
            vm.desserts = results;
            vm.items = vm.pizzas.concat(vm.drinks.concat(vm.desserts));
          });
      });
  });


  vm.select = function(item) {
    if ("PIZZA" === item.type) {
      vm.currentMeal.pizza = item;
      }
    else if ("BOISSON" === item.type){
      vm.currentMeal.drink = item;
      }
    else {
      vm.currentMeal.dessert = item;
    }

  };

  vm.clients = [
      {
        "nom":"Winchester",
        "prenom": "Dean",
        "addr":"Lawrence",
        "tel": "064164646",
        "login": "DeanW",
        "mdp":"mdp"
      },
      {
        "nom":"Winchester",
        "prenom": "Sam",
        "addr":"Lawrence",
        "tel": "064164646",
        "login": "SamW",
        "mdp":"mdp"
      },
      {
        "nom":"Winchester",
        "prenom": "John",
        "addr":"Lawrence",
        "tel": "064164646",
        "login": "JohnW",
        "mdp":"mdp"
      },
      {
        "nom":"Dunno",
        "prenom": "Bobby",
        "addr":"Lawrence",
        "tel": "064164646",
        "login": "BobbyD",
        "mdp":"mdp"
      }
    ];

  vm.showClient = function(type) {
    console.log(type);
    if (type === 'LIVRAISON') {
      console.log($state.current.name);
      $state.transitionTo('order.clientForm');
      console.log($state.current.name);
    }
  };

  vm.updateClient = function(nom, prenom) {
    // for (var i in vm.clients) {
    //   if (vm.clients[i].nom === nom &&
    //       vm.clients[i].prenom === prenom) {
    //     vm.newOrder.client = vm.clients[i];
    //   }
    // }
    var client = {
      "nom": nom,
      "prenom": prenom
    };
    userService.findOneByNomAndPrenom(client)
    .then(function Success(res) {
      vm.newOrder.client = res;
    });

  };

  vm.validate = function() {

    vm.newOrder.paye = "false";
    vm.newOrder.etat = "EN_COURS";
    CommandService.saveCommand(vm.newOrder);
    vm.currentMeal.pizza = null;
    vm.currentMeal.drink = null;
    vm.currentMeal.dessert=null;
    vm.newOrder.total = 0;



  };


  vm.calcPrice = function() {
    vm.newOrder.total +=(angular.isUndefined(vm.currentMeal.pizza.prix) ? 0 : vm.currentMeal.pizza.prix) +
                        (angular.isUndefined(vm.currentMeal.drink.prix) ? 0 : vm.currentMeal.drink.prix) +
                        (angular.isUndefined(vm.currentMeal.dessert.prix) ? 0 : vm.currentMeal.dessert.prix);

                      vm.currentMeal.pizza   = null;
                      vm.currentMeal.drink   = null;
                      vm.currentMeal.dessert =null;
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
    vm.newOrder.produits.push(vm.currentMeal.dessert);
    vm.calcPrice();
  };

  // Fonctions des boutons de tri
  vm.listAll = function() {
    vm.items = vm.pizzas.concat(vm.drinks.concat(vm.desserts));
  };
  vm.listDrinks = function() {
    vm.items = vm.drinks;
  };
  vm.listPizzas = function() {
    vm.items = vm.pizzas;
  };
  vm.listDesserts = function() {
    vm.items = vm.desserts;
  };

});

angular.module('pzWebAdminApp.order').controller('OrderDeliveredController', function($state, CommandService) {
  var self = this;
   $state.transitionTo('orderdelivered');

  self.title = "BLABLA";

self.select = function(commande){
  if(commande.etat=="PREPARE"){
    commande.etat ="LIVRAISON";
  }else if(commande.etat=="LIVRAISON") {
    commande.etat="TERMINE";
  }
  CommandService.updateCommande(commande);
};

CommandService.getCommandesPretesLivraison().then(function(results){

self.commandesalivrer = results;

}.bind(this));

});
