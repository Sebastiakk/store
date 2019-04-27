import angular from 'angular';
import '../services';
import categories from './categories';
import back from './back_history';
import shopping_cart from './shopping_cart';
import card_product from './card-product';

// Se agrupan todas las directivas en un solo modulo y se exporta para importarlo en el modulo principal
angular.module('directives', ['services'])
    .directive('categories', categories) // Esta es la lista de categorias que se visualiza en la vista principal y en la barra lateral 
    .directive('btnCart', shopping_cart) // Esta es el boton de agregar al carrito, al cual se le pasa el id del producto y valida si ya esta agregado o no 
    .directive('cardProduct', card_product) // Esta es la card pequeña donde se ve el producto 
    .directive('back', back); // Esta directiva permite ir una pagina atras en el historial del navegador