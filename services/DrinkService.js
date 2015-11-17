angular.module('DrinkService', []).service('DrinkService', function($http) {

    this.drinks = [
      {
         "id":"6",
        "nom":"Pina Colada",
          "type":"BOISSON"
      },
      {
         "id":"7",
        "nom":"Jus d'ananus",
          "type":"BOISSON"
      },
      {
         "id":"8",
        "nom":"7up",
        "type":"BOISSON"
      },
      {
         "id":"9",
        "nom":"Canada Dry",
          "type":"BOISSON"
      }
    ];

    this.getDrinks = function() {
      return this.drinks;
    };

});
