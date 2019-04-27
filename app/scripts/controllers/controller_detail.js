import {
    decode
} from '../factories/url_encode';

let _service = null,
    _toast = null,
    _params = null;
export default class detail {

    constructor(service_products, $stateParams, toast) {
        _service = service_products;
        _params = $stateParams;
        _toast = toast;
        this.init();
    }

    async get_product() {
        try {
            const res = await _service.get_product(decode(_params.id));
            this.product = res.data.data;
        } catch (error) {
            _toast.error("No se pudo obtener el detalle del producto");
        }
    }

    init() {
        this.product = {};
        this.get_product();
    }

}
detail.$inject = ['service_products', '$stateParams', 'toast'];