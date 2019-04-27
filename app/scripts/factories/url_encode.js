module.exports = {
    encode: (json) => {
        return window.btoa(JSON.stringify(json));
    },
    decode: (cadena) => {
        try {
            return JSON.parse(window.atob(cadena));
        } catch (error) {
            return false;
        }
    }
};