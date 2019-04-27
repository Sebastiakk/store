rutas.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
export default function rutas($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/🌐/home');
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $stateProvider.state('app', {
        url: '/🌐',
        template: require('../../views/bar.html'),
        controller: 'controller_barr as  control',
    }).state('app.home', {
        url: '/home',
        template: require('../../views/home.html'),
        controller: 'controller_home as control'
    }).state('app.detail', {
        url: '/detail/:id',
        template: require('../../views/detail.html'),
        controller: 'controller_detail as control'
    });
};