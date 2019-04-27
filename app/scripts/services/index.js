import angular from 'angular';
import service_categories from './service_categories';
import service_products from './service_products';

export default angular
    .module('services', [])
    .service('service_categories', service_categories)
    .service('service_products', service_products)