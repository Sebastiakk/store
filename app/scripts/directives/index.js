import angular from 'angular';
import '../services';
import categories from './categories';
import back from './back_history';
import shopping_cart from './shopping_cart';
import card_product from './card-product';

// Se cargan todas las directivas a la app
angular.module('directives', ['services'])
    .directive('categories', categories)
    .directive('btnCart', shopping_cart)
    .directive('cardProduct', card_product)
    .directive('back', back);