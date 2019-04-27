rutas.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
export default function rutas($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/🌐/home');
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $stateProvider.state('app', {
        url: '/🌐',
        template: require('../../views/bar.html'),
        controller: 'controller_barr as  control',
        extra: {
            title: '',
            bar: false
        }
    }).state('app.home', {
        url: '/home',
        template: require('../../views/home.html'),
        controller: 'controller_home as control',
        extra: {
            title: 'Inicio',
            bar: false
        }
    }).state('app.detail', {
        url: '/detail/:id',
        template: require('../../views/detail.html'),
        controller: 'controller_detail as control',
        extra: {
            title: 'Detalle de producto',
            bar: true
        }
    }).state('app.cart', {
        url: '/cart',
        template: require('../../views/cart.html'),
        controller: 'controller_cart as control',
        extra: {
            title: 'Carrito de compras',
            bar: true
        }
    });
};