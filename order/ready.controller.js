angular.module('pzWebAdminApp.order').controller('ReadyController', function($state, PizzaService, DrinkService, CommandService){
  this.pizzaPretes = {};

  CommandService.getCommandesPretesCaisse()
    .then(function (commandes) {
        this.pizzaPretes = commandes;
    }.bind(this));

    this.validerDistribution = function(commande){
      commande.etat="TERMINE";
      CommandService.updateCommande(commande);
    };
});
