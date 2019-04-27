let _service = null,
    _local = null;
export default class bar {

    constructor(service_products, $localStorage) {
        _service = service_products;
        _local = $localStorage;
        this.init();
    }

    n_product() {
        try {
            return _local.cart.length;
        } catch (error) {
            return 0;
        }
    }

    init() {

    }

}
bar.$inject = ['service_products', '$localStorage'];