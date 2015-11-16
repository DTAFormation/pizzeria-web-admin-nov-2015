angular.module('DrinkService', []).service('DrinkService', function($http) {

    this.drinks = [
      {
        "Nom":"Pina Colada",
          "type":"BOISSON"
      },
      {
        "Nom":"Jus d'ananus",
          "type":"BOISSON"
      },
      {
        "Nom":"7up",
        "type":"BOISSON"
      },
      {
        "Nom":"Canada Dry",
          "type":"BOISSON"
      }
    ];

    this.getDrinks = function() {
      return this.drinks;
    };

});
