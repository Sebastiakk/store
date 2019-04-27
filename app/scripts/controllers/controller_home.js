let _service = null;
export default class home {

    constructor(service_products) {
        _service = service_products;
        this.init();
    }

    async get_productos() {
        try {
            const res = await _service.get_all_products();
            this.products = this.shuffle(res.data.data);
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
        this.get_productos();
    }

}
home.$inject = ['service_products'];