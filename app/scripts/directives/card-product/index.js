let _service = null;
export default class card_product {

    constructor() {
        return this.directive();
    }

    directive() {
        return {
            restrict: 'AE',
            template: require('./template.html'),
            link: this.link,
            scope: {
                product: '='
            }
        }
    };

    link(control) {
        control.encode = (json) => {
            return window.btoa(JSON.stringify(json));
        }
    }

}
card_product.$inject = [];