let _service = null,
    _params = null;
export default class detail {

    constructor(service_products, $stateParams) {
        _service = service_products;
        _params = $stateParams;
        this.init();
    }

    async get_product() {
        try {
            const res = await _service.get_product(_params.id);
            this.product = res.data.data;
        } catch (error) {

        }
    }

    init() {
        this.product = {};
        this.get_product();
    }

}
detail.$inject = ['service_products', '$stateParams'];