import API from '../configs/api';
let _http = null;

export default class service_products {
  constructor($http) {
    _http = $http;
  }

  async get_all_products() {
    return await _http.get(API + 'product');
  }

  async get_product(id) {
    return await _http.get(API + 'product/' + id);
  }

  async all_products_categories(id) {
    return await _http.get(API + 'product/' + id);
  }

  async all_products_categories(id) {
    return await _http.get(API + 'product/category/' + id);
  }

  async get_related_products(id) {
    return await _http.get(API + 'product/related/' + id);
  }

}
service_products.$inject = ['$http'];