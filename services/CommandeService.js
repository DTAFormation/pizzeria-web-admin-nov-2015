angular.module('CommandeService', []).service('CommandeService', function($http){
	/*
	this.commandes = [
		{
			"id":1,
			"type":"sur_place",
			"paiement":"en_ligne",
			"paye":true,
			"etat":"prepare"
		},
		{
			"id":2,
			"type":"a_emporter",
			"paiement":"carte",
			"paye":false,
			"etat":"en_cours"
		},
		{
			"id":3,
			"type":"livraison",
			"paiement":"liquide",
			"paye":false,
			"etat":"prepare"
		},
		{
			"id":4,
			"type":"a_emporter",
			"paiement":"liquide",
			"paye":false,
			"etat":"prepare"
		},
		{
			"id":5,
			"type":"a_emporter",
			"paiement":"carte",
			"paye":false,
			"etat":"prepare"
		},
		{
			"id":6,
			"type":"livraison",
			"paiement":"carte",
			"paye":false,
			"etat":"prepare"
		}
	];

	this.getCommandes = function(){
		return this.commandes;
	};

	this.getCommandesADistribuer = function(){
		tabToReturn = [];
		for(var i = 0; i < this.commandes.length; i++)
			if(this.commandes[i].etat == "prepare" && this.commandes[i].type!="livraison")
				tabToReturn[tabToReturn.length] = this.commandes[i];

		return tabToReturn;
	};


	this.updateToTermine = function(tab){
		tab.etat = "termine";
	};
	*/

	function handleResponse(response) {
        return response.data
    }

    this.getCommandes= function () {
            return $http.get('http://localhost:8080/commandesPretes')
            .then(handleResponse)
    }

    this.updateToTermine= function (commande) {
    		commande.etat="TERMINE";
            return $http.put('http://localhost:8080/command', commande)
            .then(handleResponse)
    }
});