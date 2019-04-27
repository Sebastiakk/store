import {
    encode
} from '../factories/url_encode'; // pasa un string a Base64 y viceversa
let _service = null,
    _state = null,
    _mdSidenav = null,
    _local = null;
export default class bar {

    constructor(service_products, local, $state, $mdSidenav) { // Se inicializan las variables
        _service = service_products; // servicio
        _local = local; // Provider que es para guardar datos en el navegador, pero de manera encriptada
        _state = $state; // Sirve para manejar las diversas rutas de la app
        _mdSidenav = $mdSidenav; // Controlador de la barra lateral
        this.init();
    }

    n_product() { // Obtiene la contidad de productos en el carrito
        try {
            return _local.get('cart').length;
        } catch (error) {
            return 0;
        }
    }

    selected_item(item) { // Obtiene el producto seleccionado en la busqueda y redirecciona la pagina para ver el detalle del producto
        if (item) {
            _state.go('app.detail', {
                id: encode(item.id_producto)
            });
        }
    }
    async get_productos() { // Obtiene toodos los productos
        try {
            const res = await _service.get_all_products();
            this.products = res.data.data;
        } catch (error) {

        }
    }

    buildToggler(componentId) { // Abre o cierra la barra lateral
        return function () {
            _mdSidenav(componentId).toggle();
        };
    }

    init() { // Inicializa el resto de conponentes
        this.toggleSidenav = this.buildToggler('closeEventsDisabled');
        this.products = [];
        this.get_productos();
    }

}
bar.$inject = ['service_products', 'local', '$state', '$mdSidenav'];