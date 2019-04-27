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

}
service_products.$inject = ['$http'];