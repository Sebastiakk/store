import API from '../configs/api';
let _http = null;

export default class service_brand {
  constructor($http) {
    _http = $http;
  }

  async get_brands() {
    return await _http.get(API + 'brand/');
  }

  async get_products_brands(id) {
    return await _http.get(API + 'brand/products/' + id);
  }

}
service_brand.$inject = ['$http'];