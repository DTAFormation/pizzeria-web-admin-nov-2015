angular.module('pzWebAdminApp.order').controller('PayController', function($state, $stateParams, CommandService){
  var ctrl = this;
  ctrl.command = $stateParams.command;
  ctrl.recu = 0;
  ctrl.rendu = 0;

  this.validerPaiement = function(){
    if(this.payForm.$invalid){
        alert("error");
        return;
    }

    if(ctrl.command.total == ctrl.recu - ctrl.rendu){
      ctrl.command.paye=true;
      CommandService.updateCommande(ctrl.command);
      if(ctrl.command.type!="LIVRAISON") $state.go('orderReady');
      else $state.go('orderdelivered');
    }else{
      alert("error");
      return;
    }

  };

  this.paiementCarte = function(){
    ctrl.recu = ctrl.command.total;
  };
});