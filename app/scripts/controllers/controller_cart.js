let _service = null,
    _state = null,
    _toast = null,
    _local = null;
export default class cart {

    constructor(service_cart, local, $state, toast) {
        _service = service_cart;
        _local = local;
        _state = $state;
        _toast = toast;
        this.init();
    }

    async get_details_cart() {
        try {
            const cart = _local.get('cart').map((item) => {
                return item.prodct
            })
            if (cart.length > 0) {
                const result = await _service.get_products_cart(cart);
                this.cart = result.data.data;
            }
        } catch (error) {
            _toast.error("No se pudo obtener el detalle del carrito");
        }
    }

    get_cart() {
        try {
            return _local.get('cart');
        } catch (error) {}
    }
    delete_product(i) {
        try {
            let temp = _local.get('cart');
            temp.splice(i, 1);
            _local.set('cart', temp)
            _state.reload();
        } catch (error) {
            _toast.error("No se pudo eliminar el producto");
        }
    }

    init() {
        this.cart = [];
        this.get_details_cart();
    }

}
cart.$inject = ['service_cart', 'local', '$state', 'toast'];