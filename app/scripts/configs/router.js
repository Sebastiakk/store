rutas.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
export default function rutas($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/🌐/home');
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $stateProvider.state('app', {
        url: '/🌐',
        template: require('../../views/bar.html'),
        controller: ['$state', function ($state) {
            $state.go('app.home');
        }]
    }).state('app.home', {
        url: '/home',
        template: require('../../views/home.html')
    });
};