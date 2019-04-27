import {
    decode
} from '../factories/url_encode'; // pasa un string a Base64 y viceversa

let _service = null,
    _toast = null,
    _state = null,
    _params = null;

export default class brand {

    constructor(service_brand, $stateParams, toast, $state) {
        _service = service_brand;
        _params = $stateParams;
        _toast = toast; // Provider que mustra los toast en la parte superior derecha de la app
        _state = $state;
        this.init();
    }

    async get_products_brands() { // obtiene los productos segun la marca
        try {
            const res = await _service.get_products_brands(decode(_params.id));
            this.brand = res.data.data.brands;
            this.products = res.data.data.products;
        } catch (error) {
            _toast.error("No hay productos de esta marca");
            _state.go('app.home');
        }
    }

    init() {
        this.brand = [];
        this.products = [];
        this.get_products_brands();
    }

}
brand.$inject = ['service_brand', '$stateParams', 'toast', '$state'];