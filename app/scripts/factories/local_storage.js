import CryptoJS from 'crypto-js';
const key = `nzDCUmnd^C.U2c&n'(5!7R"59h6%B(S5}6`;

local_storage.$inject = ["$localStorage"];
export default function local_storage($localStorage) {
    var control = {
        set,
        get,
        delete: delete_item,
    };

    return control;

    function set(nombre, datos = null) {
        try {
            $localStorage[nombre] = CryptoJS.AES.encrypt(JSON.stringify(datos), key).toString();
            return true;
        } catch (error) {
            return false;
        }
    }

    function get(nombre) {
        try {
            const bytes = CryptoJS.AES.decrypt($localStorage[nombre], key);
            const text = bytes.toString(CryptoJS.enc.Utf8);
            const resultado = JSON.parse(text);
            return resultado;
        } catch (error) {
            return null;
        }
    }

    function delete_item(nombre) {
        delete $localStorage[nombre];
    }
}