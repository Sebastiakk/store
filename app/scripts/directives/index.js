import angular from 'angular';
import '../services';
import categories from './categories';

// Se cargan todas las directivas a la app
angular.module('directives', ['services'])
    .directive('categories', categories);