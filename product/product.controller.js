angular.module('pzWebAdminApp.product', [
  'ui.router',
  'PizzaService',
  'DessertService',
  'DrinkService',
  'IngredientsService',
  'ProductService'
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

angular.module('pzWebAdminApp.product').controller('productController', function($state, PizzaService, DrinkService,DessertService,IngredientsService,ProductService) {
  var ctrl=this;
  $state.transitionTo('product.list');
  

  ctrl.listupdate=function(){
    PizzaService.getPizzaList().then(function ihaveit(response){
      ctrl.pizzas = response ;
    });
    
    DrinkService.getDrinkList().then(function ihaveit(response){
      ctrl.boissons = response  
    });

    DessertService.getDessertList().then(function ihaveit(response){
      ctrl.desserts = response  
    });

    IngredientsService.getIngredientList().then(function ihaveit(response){
      ctrl.ingredientsProducts = response  
    });

    ctrl.produitSelectionner=null;
  }

  ctrl.listupdate();



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
ctrl.listingredientForm=[],
 ctrl.ingredientsProductmodif=[],

//BOUTON

    //Partie détail dans la vue Liste Produit
        //Pour l'afichage du détail
        ctrl.select = function(item) {
          ctrl.produitSelectionner=item;
          console.log(item);
        };

        //Bouton modifier du détail du produit
        ctrl.modifier=function(item){
          
          ctrl.ingredientsProductmodif=[];

          angular.forEach(ctrl.ingredientsProducts, function(value,key){

              angular.forEach(ctrl.produitSelectionner.ingredients,function(ingredient,key){
                if(value.id==ingredient.id){value.selected=true;};
              });

              ctrl.ingredientsProductmodif.push(value);
          });
          
          console.log(ctrl.ingredientsProductmodif);
          console.log(ctrl.produitSelectionner);
         $state.transitionTo('product.modifproduct');
       }

        //Bouton supprimer du détail du produit
        ctrl.supprimer=function(id){
         ProductService.deleteProduct(id).then(function (response){
          ctrl.produitSelectionner=[];
          ctrl.listupdate();
          $state.transitionTo('product.list');
        });
       }

    //Pour la vue liste ingredient
    ctrl.supprimerIngredient=function(id){
      IngredientsService.deleteIngredient(id).then(function (response){
        ctrl.listupdate();
        $state.transitionTo('product.listingredient'); 
      }, function (error){
        
          alert("Supprimer en premier les pizzas qui ont cet ingredient",error);
      });
    }

    //Pour le formulaire d'ajout d'un produit 
    ctrl.save = function() {
       
      if(this.productForm.$invalid){
        alert("Erreur")
        return
      }
          ctrl.productForm.ingredients=ctrl.ingredientsProducts.filter(function(ingredient){ return ingredient.selected});
        
            ProductService.saveProduct(ctrl.productForm).then(function (response){
            ctrl.productForm=null;
            ctrl.listupdate();
            $state.transitionTo('product.list');
          });

        };

        ctrl.updateProduit = function() {
          if(this.produitSelectionner.$invalid){
            alert("Erreur")
            return
          }

            ctrl.produitSelectionner.ingredients=ctrl.ingredientsProductmodif.filter(function(ingredient){ return ingredient.selected});
        
            ProductService.saveProduct(ctrl.produitSelectionner).then(function (response){
            ctrl.produitSelectionner=null;
            ctrl.listupdate();
            $state.transitionTo('product.list');
            });
        };

    //Pour le formulaire d'ajout d'un ingredient
    ctrl.saveIngredient = function() {
      if(this.ingredientForm.$invalid){
        alert("Erreur")
        return
      }

      IngredientsService.saveIngredient(ctrl.ingredientForm).then(function (response){
       ctrl.ingredientForm=null;
       ctrl.listupdate();
       $state.transitionTo('product.listingredient');
     }); 
      
    }


 });

