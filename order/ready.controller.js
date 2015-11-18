angular.module('pzWebAdminApp.order').controller('ReadyController', function($state, PizzaService, DrinkService, CommandeService){
	this.pizzaPretes = {};

	CommandeService.getCommandesPretesCaisse()
    .then(function (commandes) {
        this.pizzaPretes = commandes
    }.bind(this));

    this.validerDistribution = function(commande){
    	commande.etat="TERMINE";
    	CommandeService.updateCommande(commande);
    }
});