angular.module('pzWebAdminApp.product', [
  'ui.router',
  'PizzaService',
  'DrinkService'
  ]);
angular.module('pzWebAdminApp.product').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('product', {
    url: '/product',
    abstrat: true,
    views: {
      "": {
        templateUrl: 'product/views/product.html',
        controller: 'productController',
        controllerAs: 'ctrl'
      }
    }
  })
  .state('product.addproduct', {
    views: {
      'show': {
        templateUrl: 'product/views/productadd.html',
      },
      parent:'product'
    }
  })
  .state('product.modifproduct', {
    views: {
      'show': {
        templateUrl: 'product/views/productmodif.html',
      },
      parent:'product'
    }
  })
  .state('product.addingredient', {
    views: {
      'show': {
        templateUrl: 'product/views/ingredientadd.html',
      },
      parent:'product'
    }
  })
  .state('product.addmeal', {
    views: {
      'show': {
        templateUrl: 'product/views/mealadd.html',
      },
      parent:'product'
    }
  })
    .state('product.listingredient', {
    views: {
      'show': {
        templateUrl: 'product/views/ingredientlist.html',
      },
      parent:'product'
    }
  })
  .state('product.list', {
    views: {
      'show': {
        templateUrl: 'product/views/productlist.html',
      },
      parent:'product'
    }
  })

});

angular.module('pzWebAdminApp.product').controller('productController', function($state, PizzaService, DrinkService) {
  var ctrl=this;
  $state.transitionTo('product.list');
  ctrl.pizzas = PizzaService.getPizzas();
  ctrl.boissons = DrinkService.getDrinks();
  ctrl.desserts=null;
  ctrl.listproducts = ctrl.pizzas.concat(ctrl.boissons).concat(ctrl.desserts);

//BOUTON

    //Partie détail dans la vue Liste Produit
        //Pour l'afichage du détail
        ctrl.select = function(item) {
          ctrl.produitSelectionner=item;
        };
        //Bouton modifier du détail du produit

        ctrl.modifier=function(item){
           $state.transitionTo('product.modifproduct');
        }
        //Bouton supprimer du détail du produit
        ctrl.supprimer=function(item){
                      //TODO

           $state.transitionTo('product.list');
        }

    //Pour la vue liste ingredient
        ctrl.supprimerIngredient=function(item){
                      //TODO

          $state.transitionTo('product.listingredient');             
        }

    //Pour le formulaire d'ajout d'un produit et modification
        ctrl.save = function() {
          if(this.productForm.$invalid){
            alert("Erreur")
            return
          }
          console.log(ctrl.listingredientForm);
          console.log(ctrl.productForm);//ToDO enregistrement dans BDD
          $state.transitionTo('product.list');
        };

    //Pour le formulaire d'ajout d'un ingredient
        ctrl.saveIngredient = function() {
          if(this.productForm.$invalid){
            alert("Erreur")
            return
          }
          console.log(ctrl.ingredientForm);//ToDO enregistrement dans BDD
          $state.transitionTo('product.listingredient');
        }

//Initialisation de variable pour les formulaires
ctrl.typeProducts=[ {
 "id":"1",
 "nom":"PIZZA",
},
{
 "id":"2",
 "nom":"BOISSON",
},
{
 "id":"3",
 "nom":"DESSERT",
}],

ctrl.tailleProducts=[ {
 "id":"1",
 "nom":"MOYEN",
},
{
 "id":"2",
 "nom":"LARGE",
},
{
 "id":"3",
 "nom":"XLARGE",
}],

ctrl.ingredientsProducts=[ {
 "id":"1",
 "nom":"FROMAGE",
},
{
 "id":"2",
 "nom":"TOMATE",
},
{
 "id":"3",
 "nom":"CHORIZO",
}],

ctrl.formatProducts=[ {
 "id":"1",
 "nom":"NORMAL",
},
{
 "id":"2",
 "nom":"XL",
}
],

//Pour selectionner les ingredients sur le formulaire d'ajout de produit
  ctrl.listingredientForm=[]

});