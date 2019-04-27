module.exports = {
    encode: (json) => {// Encripta a base 64
        return window.btoa(JSON.stringify(json));
    },
    decode: (cadena) => {// desencripta un base 64
        try {
            return JSON.parse(window.atob(cadena));
        } catch (error) {
            return false;
        }
    }
};