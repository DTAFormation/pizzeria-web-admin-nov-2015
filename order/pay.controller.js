angular.module('pzWebAdminApp.order').controller('PayController', function($state, $stateParams, CommandService){
  var ctrl = this;
  ctrl.command = $stateParams.command;
  ctrl.recu = 0;
  ctrl.rendu = 0;

  ctrl.validerPaiement = function(){
    if(ctrl.payForm.$invalid){
        alert("error");
        return;
    }

    if(ctrl.command.total == ctrl.recu - ctrl.rendu){
      ctrl.command.paye=true;
      CommandService.updateCommande(ctrl.command);
      if(ctrl.command.type!="LIVRAISON") $state.go('orderReady');
      else $state.go('orderdelivered');
    // }else{
    //   alert("error");
      return;
    }

  };

  ctrl.paiementCarte = function(){
    ctrl.recu = ctrl.command.total;
  };

  ctrl.calculerRendu = function(){
    ctrl.rendu = ctrl.recu - ctrl.command.total;
    ctrl.rendu = Math.round(ctrl.rendu*100)/100;
  }
});
