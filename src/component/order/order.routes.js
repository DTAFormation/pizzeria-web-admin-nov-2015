export default function routes($stateProvider) {
  $stateProvider
  .state('order', {
    url: '/order',
    template: require('./order.html'),
    controller: 'OrderController',
    controllerAs: 'order'
  });
}

routes.inject= ['$stateProvider'];
