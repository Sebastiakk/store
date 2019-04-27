let _service = null;
export default class categories {

    constructor(service_categories) {
        _service = service_categories;
        return this.directive();
    }

    directive() {
        return {
            restrict: 'AE',
            template: require('./template.html'),
            link: this.link,
            scope: {}
        }
    };

    link(control) {
        _service.get_all_categories().then((result) => {
            control.categories = result.data.data;
        }).catch((err) => {});

        control.encode = (json) => {
            return window.btoa(JSON.stringify(json));
        }

    }




}
categories.$inject = ['service_categories'];