angular.module('CommandeLivreurService', []).service('CommandeLivreurService', function($http) {
    /*
    this.commandes_livreur = [
      {
        "id_commande":"1",
        "produits":"2 pizza Margarita + 1 pizza blabla + 1 coca XL",
        "menus": "2 maxi bestof the best + blablalalal",

      },
      {
        "id_commande":"2",
        "produits":"2 pizza Margarita + 1 pizza blabla + 1 coca XL",
        "menus": "2 maxi bestof the best + blablalalal",
       
      },
      {
        "id_commande":"3",
        "produits":"2 pizza Margarita + 1 pizza blabla + 1 coca XL",
        "menus": "2 maxi bestof the best + blablalalal",
      },
      {
        "id_commande":"4",
        "produits":"2 pizza Margarita + 1 pizza blabla + 1 coca XL",
        "menus": "2 maxi bestof the best + blablalalal",
       
      },
      {
        "id_commande":"5",
        "produits":"2 pizza Margarita + 1 pizza blabla + 1 coca XL",
        "menus": "2 maxi bestof the best + blablalalal",
       
      }
    ];

    this.getCommandesLivreurs = function() {
      return this.commandes_livreur;
    };*/

    function handleResponse(response) {
        return response.data;
    }

    this.getCommandesLivreurs = function () {
            return $http.get('http://localhost:8080/commandesEnCours')
            .then(handleResponse);
    }
});