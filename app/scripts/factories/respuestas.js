const posicion = "top right";

function respuestas($mdToast, $state) {
    var control = {
        info,
        error,
        link
    };

    return control;

    function info(text = "null") {
        const toast = $mdToast.simple().textContent(text).position(posicion);
        $mdToast.show(toast);
    }

    function link(text = "null", link = "") {
        const toast = $mdToast.simple().textContent(text).position(posicion).action('Programar correo').highlightAction(true).highlightClass('md-accent');
        $mdToast.show(toast)
            .then(function (response) {
                if (response === 'ok') {
                    $state.go(link);
                }
            }).catch(() => {});
    }

    function error(text = "There was an unexpected error") {
        const toast = $mdToast.simple().textContent(text).position(posicion);
        $mdToast.show(toast);
    }
}

respuestas.$inject = ["$mdToast", "$state"];
module.exports = respuestas;