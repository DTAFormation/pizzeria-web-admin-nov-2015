var BACKEND_BASE_URL = 'http://localhost:8080';
angular.module('pzWebAdminApp.shared').constant('pzConfig', {
	'DRINK_RESOURCE_URL': BACKEND_BASE_URL + '/drink',
	'COMMAND_RESOURCE_URL':BACKEND_BASE_URL + '/command',
	'DESSERT_RESOURCE_URL':BACKEND_BASE_URL + '/dessert',
	'INGREDIENT_RESOURCE_URL':BACKEND_BASE_URL + '/ingredient',
	'PIZZA_RESOURCE_URL':BACKEND_BASE_URL + '/pizza',
	'PRODUCT_RESOURCE_URL':BACKEND_BASE_URL + '/product'
});