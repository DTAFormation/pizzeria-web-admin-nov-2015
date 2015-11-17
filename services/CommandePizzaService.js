angular.module('CommandePizzaService', []).service('CommandePizzaService', function($http) {

    this.commandes_pizzas = [
      {
        "id_commande_pizza":"1",
        "id_commande":"1",
        "name_pizza":"Margarita",
        "taille":"XS"
      },
      {
        "id_commande_pizza":"2",
        "id_commande":"1",
        "name_pizza":"Daniella",
        "taille":"XS"
      },
      {
        "id_commande_pizza":"1",
        "id_commande":"2",
        "name_pizza":"Louisa",
        "taille":"XLL"
      },
      {
        "id_commande_pizza":"2",
        "id_commande":"2",
        "name_pizza":"Sarah",
        "taille":"xXS"
      },
      {
        "id_commande_pizza":"3",
        "id_commande":"2",
        "name_pizza":"Lola",
        "taille":"XS"
      }
    ];

    this.getCommandesPizzas = function() {
      return this.commandes_pizzas;
    };


});