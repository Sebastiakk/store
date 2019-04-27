import API from '../configs/api';
let _http = null;

export default class service_categories {
  constructor($http) {
    _http = $http;
  }

  async get_all_categories() {
    return await _http.get(API + 'categories');
  }

  async get_categorie(id) {
    return await _http.get(API + 'categories/' + id);
  }

}
service_categories.$inject = ['$http'];