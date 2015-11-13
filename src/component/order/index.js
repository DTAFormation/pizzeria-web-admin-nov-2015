import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './order.routes';
import OrderController from './order.controller';
import PizzaService from '../../services/PizzaService';
import PizzaFilter from '../../filters/PizzaFilter';

export default angular.module('pizza.order', [uirouter, PizzaService, PizzaFilter])
.config(routing)
.controller('OrderController', OrderController)
.name;
