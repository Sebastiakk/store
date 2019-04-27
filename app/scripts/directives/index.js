import angular from 'angular';
import '../services';
import categories from './categories';
import back from './back_history';
import shopping_cart from './shopping_cart';

// Se cargan todas las directivas a la app
angular.module('directives', ['services'])
    .directive('categories', categories)
    .directive('btnCart', shopping_cart)
    .directive('back', back);