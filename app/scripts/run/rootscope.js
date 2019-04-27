import {
    encode
} from '../factories/url_encode';

rootscope.$inject = ["$rootScope", "$transitions", "$state", "$stateParams"];
export default function rootscope($rootScope, $transitions, $state, $stateParams) {
    $rootScope.$stateParams = $stateParams;
    $rootScope._url = encode;
    $transitions.onSuccess({}, function ($transition) {
        $rootScope.$state = $state.current.extra;
    });
};