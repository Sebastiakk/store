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

    async get_details_cart() { // Obtiene los datos del localstorague y lo envia a la api para corroborar nuevos cambios en el stock del producto o precios
        try {
            const cart = _local.get('cart').map((item) => {
                return item.prodct
            })
            if (cart.length > 0) {
                const result = await _service.get_products_cart(cart);
                this.cart = result.data.data;
            }
        } catch (error) {
            _toast.error("Could not get the detail of the cart");
        }
    }


    async shop() { // CAmpra de n prodcutos
        // Esta funcion todo el carrito actual en el local storague y el del la BD y valida que los precios y/o cantidades sean iguales
        // Si no son iguales le notifica al usuario que revise nuevamente el carrito
        const actual = this.cart;
        await this.get_details_cart();
        const nuevo = this.cart;
        actual.map(async (i) => {
            nuevo.map(async (j) => {
                if (i.stock === j.stock) {
                    const cart = _local.get('cart').map((item) => {
                        return item
                    })
                    await this.save(cart); // Si el carrito es igual guarda la compra en la BD
                } else { // Mensaje de error
                    _toast.error("The inventory of some products changed");
                }
            })
        })

    }
    async save(cart) { //Actualiza el stock de los productos
        const result = await _service.shop(cart);
        if (result.data.response === true) {
            _toast.error("Thank you for shopping at ViertualShop");
            _local.set('cart', [])
            _state.reload();
        } else {
            this.get_details_cart();
            _toast.error("The inventory of some products changed");
        }
    }

    get_cart() { // Obtiene el contenido del carrito pero del local storague
        try {
            return _local.get('cart');
        } catch (error) {}
    }

    total() { // Calcula el total del carrito
        let total = 0;
        this.cart.map((i) => {
            total += (i.amount * i.precio);
        });
        return total;
    }

    update_amount(data) { // Actualiza la cantidad de productos a comprar en el local storague
        let temp = _local.get('cart');
        temp.map((i) => {
            if (i.prodct === data.id_producto) {
                i.amount = data.amount;
            }
        });
        _local.set('cart', temp)
    }

    delete_product(i) { // Elimina el producto
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
            _toast.error("The product could not be removed");
        }
    }

    init() {
        this.cart = [];
        this.get_details_cart();
    }

}
cart.$inject = ['service_cart', 'local', '$state', 'toast'];