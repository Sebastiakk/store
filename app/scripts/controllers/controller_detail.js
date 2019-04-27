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

    async get_product() { // Obtiene el detale del producto
        try {
            const res = await _service.get_product(decode(_params.id));
            this.product = res.data.data;
        } catch (error) {
            _toast.error("No se pudo obtener el detalle del producto");
        }
    }

    async get_related_products() { // Obtiene productos relacionados a la categoria del producto visualizado actualmente en la app
        try {
            const res = await _service.get_related_products(decode(_params.id));
            this.related = res.data.data;
        } catch (error) {
            _toast.error("No se pudo obtener los productos relacionados");
        }
    }

    init() {
        this.product = {};
        this.related = [];
        this.get_product();
        this.get_related_products();
    }

}
detail.$inject = ['service_products', '$stateParams', 'toast'];