import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import order from './component/order';


angular.module('pizza', [uirouter, order])
.config(routing);
