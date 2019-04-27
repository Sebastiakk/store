import angular from 'angular';
import route from './router.js';
import theme from './theme';

// Se agrupan todas las configuraciones en un solo modulo y se exporta para importarlo en el modulo principal
angular.module('configs', [])
    .config(route)
    .config(theme);