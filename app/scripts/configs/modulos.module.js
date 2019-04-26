import angular from 'angular';
import '@uirouter/angularjs';
import 'ngstorage';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';
import 'angular-loading-bar';
// Se cargan todos los modulos o dependencia y se exporta para poder utilizarlos en toda la APP
export default angular.module('modules', [
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    'ngMessages',
    'ngStorage',
    'ui.router',
    'angular-loading-bar',
]);