angular.module('pzWebAdminApp.order').controller('ReadyController', function($state, PizzaService, DrinkService, CommandService){
  var ctrl = this;
  ctrl.toggle = {};
  ctrl.pizzaPretes = {};

  ctrl.listUpdate = function (){
  	CommandService.getCommandesPretesCaisse()
    .then(function (commandes) {
        ctrl.pizzaPretes = commandes;
        for (var i = 0; i < ctrl.pizzaPretes.length; i++)
          ctrl.toggle[i] = false;
    }.bind(ctrl));
  };

  ctrl.listUpdate();

    ctrl.validerDistribution = function(commande){
      commande.etat="TERMINE";
      CommandService.updateCommande(commande)
      	.then(function success(response){
      		ctrl.listUpdate();
      })
    };
});
