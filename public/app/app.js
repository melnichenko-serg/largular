var bookApp = angular.module('bookApp', [
    'ngRoute', 'bookAppControllers'
]);

bookApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        })
        .when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'registerCtrl'
        })
        .when('/', {
            templateUrl: 'templates/index.html',
            controller: 'mainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);