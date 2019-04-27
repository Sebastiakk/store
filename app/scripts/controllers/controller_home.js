let _service = null,
    _service2 = null;
export default class home {

    constructor(service_products, service_brand) {
        _service = service_products;
        _service2 = service_brand;
        this.init();
    }

    async get_products() {
        try {
            const res = await _service.get_all_products();
            this.products = this.shuffle(res.data.data);
        } catch (error) {}
    }

    async get_brands() {
        try {
            const res = await _service2.get_brands();
            this.brands = this.shuffle(res.data.data);
        } catch (error) {

        }
    }

    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    init() {
        this.products = [];
        this.brands = [];
        this.get_products();
        this.get_brands();
    }

}
home.$inject = ['service_products', 'service_brand'];