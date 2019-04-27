let _service = null;
export default class home {

    constructor(service_products) {
        _service = service_products;
        this.init();
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
home.$inject = ['service_products'];