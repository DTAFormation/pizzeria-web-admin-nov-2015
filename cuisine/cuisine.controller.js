angular.module('pzWebAdminApp.cuisine', [
  'ui.router',
  'PizzaService'
]);
angular.module('pzWebAdminApp.cuisine').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('cuisine', {
    url: '/cuisine',
    views: {
      "": {
        templateUrl: 'cuisine/views/cuisine.html',
        controller: 'CuisineController',
        controllerAs: 'ctrl'
      }
    }
  })

  });

angular.module('pzWebAdminApp.cuisine').controller('CuisineController', function($state, CommandService) {
  var vm = this;
  vm.pizzas={};
  vm.pizzasChecked={};
  vm.commandesChecked={};

  var y = 0;
  vm.updatePage = function(){
    CommandService.getCommandesPizzasEnCours()
    .then(function(commandes, pizzas){
      vm.commandesPizza = commandes;
      for (var i=0; i<vm.commandesPizza.length; i++){
        vm.commandesChecked[i] = false;
        vm.pizzas[i] = {};
        vm.pizzasChecked[i] = {};
        for(var j = 0; j<vm.commandesPizza[i].produits.length; j++){
          if(vm.commandesPizza[i].produits[j].type=="PIZZA"){
            vm.pizzas[i][vm.y] = vm.commandesPizza[i].produits[j];
            vm.pizzasChecked[i][vm.y] = false;
            vm.y++;
          }
        }
        for(var j = 0; j<vm.commandesPizza[i].menus.length; j++){
          for(var k = 0; k<vm.commandesPizza[i].menus[j].produits.length; k++){
            if(vm.commandesPizza[i].menus[j].produits[k].type=="PIZZA"){
              vm.pizzas[i][vm.y] = vm.commandesPizza[i].menus[j].produits[k];
              vm.pizzasChecked[i][vm.y] = false;
              vm.y++;
            }
          }
        }
        var size = 0;
        for(key in vm.pizzas[i]){
          size++;
        }
        console.log(size);
        if(size == 0){
          vm.commandesPizza[i].etat = "PREPARE";
          CommandService.updateCommande(vm.commandesPizza[i])
            .then(function success(response){
              vm.updatePage();
            })
        }
        vm.y = 0;
      }
    }.bind(this))
  }

  vm.updatePage();

  this.validerPreparation = function(commande){
      commande.etat="PREPARE";
      CommandService.updateCommande(commande)
        .then(function success(response){
          vm.updatePage();
        })
    }

    vm.checked = false;

    vm.changeCheck = function(row, column){
      vm.pizzasChecked[row][column] = true;
    }

    vm.verifCommande = function(index){
      var test = true;
      var size = 0;
      for(key in vm.pizzasChecked[index]){
        size++;
      }
      for(var i=0; i<size && test; i++){
        test = vm.pizzasChecked[index][i];
        if (!test) break
      }
      vm.commandesChecked[index] = test;
    }
  });