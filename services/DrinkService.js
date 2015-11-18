angular.module('DrinkService', []).service('DrinkService', function($http) {

    this.drinks = [
      {
        "name":"Pina Colada",
        "type":"drink"
      },
      {
        "name":"Jus d'ananus",
        "type":"drink"
      },
      {
        "name":"7up",
        "type":"drink"
      },
      {
        "name":"Canada Dry",
        "type":"drink"
      }
    ];

    this.getDrinks = function() {
      return this.drinks;
    };

});
