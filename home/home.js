﻿// Déclaration du module 'home'
angular.module('pzWebAdminApp.home', [
    'ngRoute',
    'pzWebAdminApp.shared',
    'ui.router'
    ]);

// Configuration du module 'home'
angular.module('pzWebAdminApp.home').config(function($stateProvider) {

    // TODO Définir les routes spécifiques au module 'home' ici
    $stateProvider
    .state("home", {
        url: '/',
        templateUrl:"home/template/home.tpl.html",
        controller:"homeCtrl",
        controllerAs: "ctrl"
    });

    //Pour menu dropdown Bootstrap
    $(document).ready(function(){
        $(".dropdown").on("show.bs.dropdown", function(event){
            var x = $(event.relatedTarget).text(); // Get the button text
        });

    });

});

// Contrôleur principal du module 'home'
// Usage de la syntaxe 'controller as', pas besoin du '$scope'
angular.module('pzWebAdminApp.home').controller('homeCtrl', function($state,userService) {

    var ctrl = this;

    ctrl.connected=userService.isConnected();
    if(!ctrl.connected)$state.transitionTo("login");

    ctrl.prenom=userService.getPrenom();
    ctrl.isAdmin=userService.isAdmin();
    console.log("admin :"+ctrl.isAdmin);


    ctrl.title = "Page Home";

    // ...

});
