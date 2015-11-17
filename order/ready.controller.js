angular.module('pzWebAdminApp.order').controller('ReadyController', function($state, PizzaService, DrinkService, CommandeService){
	this.pizzaPretes = {};

	CommandeService.getCommandes()
    .then(function (commandes) {
        this.pizzaPretes = commandes
    }.bind(this));
});