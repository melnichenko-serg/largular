/**
 * Created by MacBookPro on 4/20/17.
 */

angular.module('bookAppServices', ['LocalStorageModule', 'restangular'])
    .factory('userService', ['$http', 'localStorageService', function ($http, localStorageService) {

        function checkIfLoggedIn() {
            return !!localStorageService.get('token');
        }

        function register(name, email, password, onSuccess, onError) {

            $http.post('/api/auth/register', {name: name, email: email, password: password})
                .then(function (response) {
                    localStorageService.set('token', response.data.token);
                    onSuccess(response);

                }, function (response) {
                    onError(response);
                });
        }

        function login(email, password, onSuccess, onError) {

            $http.post('/api/auth/login', {email: email, password: password})
                .then(function (response) {
                    localStorageService.set('token', response.data.token);
                    onSuccess(response);
                }, function (response) {
                    onError(response);
                });
        }

        function logout() {
            localStorageService.remove('token');
        }

        function getCurrentToken() {
            return localStorageService.get('token');
        }

        return {
            checkIfLoggedIn: checkIfLoggedIn,
            register: register,
            login: login,
            logout: logout,
            getCurrentToken: getCurrentToken
        }
    }]);