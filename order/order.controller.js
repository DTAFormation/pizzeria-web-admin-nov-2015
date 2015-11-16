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
  })
  .state('order', {
    url: '/order/delivered',
    templateUrl: 'order/views/list-order-delivered.html',
    controller: 'OrderDeliveredController',
    controllerAs: 'ctrl'
  });
});
angular.module('pzWebAdminApp.order').controller('OrderController', function() {
  var self = this;

  self.title = "BLABLA";
});
angular.module('pzWebAdminApp.order').controller('OrderDeliveredController', function() {
  var self = this;

  self.title = "BLABLA";
});
