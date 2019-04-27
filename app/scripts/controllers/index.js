import * as angular from 'angular';
import home from './controller_home';
import detail from './controller_detail';
import barr from './controller_barr';
import cart from './controller_cart';
import categories from './controller_categories';
import brand from './controller_brand';

// Se agrupan todas los controladores en un solo modulo y se exporta para importarlo en el modulo principal
angular.module('controllers', [])
    .controller('controller_home', home)
    .controller('controller_detail', detail)
    .controller('controller_barr', barr)
    .controller('controller_cart', cart)
    .controller('controller_categories', categories)
    .controller('controller_brand', brand)