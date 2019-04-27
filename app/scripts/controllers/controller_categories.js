import {
    decode
} from '../factories/url_encode';

let _service = null,
    _service2 = null,
    _toast = null,
    _params = null;

export default class categories {

    constructor(service_categories, service_products, $stateParams, toast) {
        _service = service_categories;
        _service2 = service_products;
        _params = $stateParams;
        _toast = toast;
        this.init();
    }

    async get_category() {
        try {
            const result = await _service.get_categorie(decode(_params.id));
            this.category = result.data.data;
        } catch (error) {
            _toast.error();
        }
    }

    async get_products() {
        try {
            const result = await _service2.all_products_categories(decode(_params.id));
            this.products = result.data.data;
        } catch (error) {
            _toast.error();
        }
    }

    init() {
        this.category = {};
        this.products = [];
        this.get_category();
        this.get_products();
    }

}
categories.$inject = ['service_categories', 'service_products', '$stateParams', 'toast'];