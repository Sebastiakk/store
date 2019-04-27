let _window = null;
export default class history_back {

    constructor($window) {
        _window = $window;
        return this.directive();
    }

    directive() {
        return {
            restrict: 'A',
            link: this.link
        }
    };

    link(scope, element, attrs) {
        element.on('click', function () {
            _window.history.back();
        });
    }

}
history_back.$inject = ['$window'];