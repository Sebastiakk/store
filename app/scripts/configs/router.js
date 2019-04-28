rutas.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
// Aqui estan todas las rutas de la app
export default function rutas($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/🌐/home'); // Si la URL del navegador no concide lo manda para este link
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $stateProvider.state('app', { // Se establecen las rutas
        url: '/🌐', // <- URL que se visualiza en el navegador
        template: require('../../views/bar.html'), // <- html que se visualiza en el navegador
        controller: 'controller_barr as  control', // <- contolador de la vista
        extra: { // <- nodulos extras proporcionados
            title: '', // <- titulo del degundo toolbar
            bar: false// <- toolbar activado o desactivado
        }
    }).state('app.home', {
        url: '/home',
        template: require('../../views/home.html'),
        controller: 'controller_home as control',
        extra: {
            title: 'Home',
            bar: false
        }
    }).state('app.detail', {
        url: '/detail/:id',
        template: require('../../views/detail.html'),
        controller: 'controller_detail as control',
        extra: {
            title: 'Product detail',
            bar: true
        }
    }).state('app.cart', {
        url: '/cart',
        template: require('../../views/cart.html'),
        controller: 'controller_cart as control',
        extra: {
            title: 'Shopping cart',
            bar: true
        }
    }).state('app.categories', {
        url: '/categories/:id',
        template: require('../../views/categories.html'),
        controller: 'controller_categories as control',
        extra: {
            title: 'Products by category',
            bar: true
        }
    }).state('app.brands', {
        url: '/brands/:id',
        template: require('../../views/brands.html'),
        controller: 'controller_brand as control',
        extra: {
            title: 'Products by brands',
            bar: true
        }
    });
};