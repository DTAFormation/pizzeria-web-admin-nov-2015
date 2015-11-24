angular.module('pzWebAdminApp.order').controller('CommandeInstanceController', function ($scope, $uibModalInstance, items) {
  var vm = this;
  console.log(items);

  vm.items = items;
  vm.ok = function () {
    // $uibModalInstance.close($scope.selected.item);
    $uibModalInstance.dismiss('cancel');
  };

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
