import angular from 'angular';
import service_categories from './service_categories';
import service_products from './service_products';
import service_cart from './service_cart';
import service_brand from './service_brand';

export default angular
    .module('services', [])
    .service('service_categories', service_categories)
    .service('service_products', service_products)
    .service('service_cart', service_cart)
    .service('service_brand', service_brand)