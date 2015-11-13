angular.module('pzWebAdminApp.order', [
  'ui.router'
]);
angular.module('pzWebAdminApp.order').config(function($stateProvider) {
  $stateProvider
  .state('order', {
    url: '/order',
    templateUrl: 'order/views/order.html',
    controller: 'OrderController',
    controllerAs: 'ctrl'
  });
});
angular.module('pzWebAdminApp.order').controller('OrderController', function() {
  var self = this;

  self.title = "BLABLA";
});
