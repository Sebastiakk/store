import API from '../configs/api';
let _http = null;

export default class service_cart {
  constructor($http) {
    _http = $http;
  }

  async get_products_cart(data) {
    return await _http.post(API + 'cart/products', {
      product: JSON.stringify(data)
    });
  }

  async shop(data) {
    return await _http.put(API + 'cart/products', {
      data: JSON.stringify(data)
    });
  }
}
service_cart.$inject = ['$http'];