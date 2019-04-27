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


    async shop() {
        const actual = this.cart;
        await this.get_details_cart();
        const nuevo = this.cart;
        actual.map(async (i) => {
            nuevo.map(async (j) => {
                if (i.stock === j.stock) {
                    const cart = _local.get('cart').map((item) => {
                        return item
                    })
                    await this.save(cart);
                } else {
                    _toast.error("El inventario de algunos productos cambiaron");
                }
            })
        })

    }
    async save(cart) {
        const result = await _service.shop(cart);
        if (result.data.response === true) {
            _toast.error("Gracias por comprar en ViertualShop");
            _local.set('cart', [])
            _state.reload();
        } else {
            this.get_details_cart();
            _toast.error("El inventario de algunos productos cambiaron");
        }
    }

    get_cart() {
        try {
            return _local.get('cart');
        } catch (error) {}
    }

    total() {
        let total = 0;
        this.cart.map((i) => {
            total += (i.amount * i.precio);
        });
        return total;
    }

    update_amount(data) {
        let temp = _local.get('cart');
        temp.map((i) => {
            if (i.prodct === data.id_producto) {
                i.amount = data.amount;
            }
        });
        _local.set('cart', temp)
    }

    delete_product(i) {
        try {
            let temp = _local.get('cart');
            temp.splice(i, 1);
            if (temp.length > 0) {
                _local.set('cart', temp)
                this.get_details_cart();
            } else {
                _local.set('cart', []);
                _state.reload();
            }
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