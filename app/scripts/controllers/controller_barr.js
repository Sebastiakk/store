import {
    encode
} from '../factories/url_encode';
let _service = null,
    _state = null,
    _local = null;
export default class bar {

    constructor(service_products, local, $state) {
        _service = service_products;
        _local = local;
        _state = $state;
        this.init();
    }

    n_product() {
        try {
            return _local.get('cart').length;
        } catch (error) {
            return 0;
        }
    }
    selected_item(item) {
        if (item) {
            _state.go('app.detail', {
                id: encode(item.id_producto)
            });
        }
    }
    async get_productos() {
        try {
            const res = await _service.get_all_products();
            this.products = res.data.data;
        } catch (error) {

        }
    }
    init() {
        this.products = [];
        this.get_productos();
    }

}
bar.$inject = ['service_products', 'local', '$state'];