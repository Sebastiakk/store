let _service = null,
    _local = null;
export default class bar {

    constructor(service_products, local) {
        _service = service_products;
        _local = local;
        this.init();
    }

    n_product() {
        try {
            return _local.get('cart').length;
        } catch (error) {
            return 0;
        }
    }

    init() {

    }

}
bar.$inject = ['service_products', 'local'];