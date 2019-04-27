import angular from 'angular';
import route from './router.js';
import theme from './theme';

// Se cargan todas las configuraciones de la app
angular.module('configs', [])
    .config(route)
    .config(theme);