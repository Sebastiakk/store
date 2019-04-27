import {
    encode
} from '../factories/url_encode';

rootscope.$inject = ["$rootScope", "$transitions", "$state", "$stateParams"];
export default function rootscope($rootScope, $transitions, $state, $stateParams) {
    $rootScope.$stateParams = $stateParams;// Parametros que se le pasa a una url
    $rootScope._url = encode; // Pasa lso datos a base64
    $transitions.onSuccess({}, function ($transition) {
        $rootScope.$state = $state.current.extra; // Actualiza los datos cada vez que cambia de vista la app
    });
};