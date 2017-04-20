/**
 * Created by MacBookPro on 4/20/17.
 */

bookAppControllers.controller('registerCtrl', ['$scope', '$location', 'userService', function ($scope, $location, userService) {

    $scope.signup = function () {
        userService.signup(
            $scope.name, $scope.email, $scope.password,
            function () {
                alert('Great! You are now signed in! Welcome, ' + $scope.name + '!');
                $location.path('/');
            },
            function () {
                alert('Something went wrong with the signup process. Try again later.');
            }
        );
    };

    $scope.name = '';
    $scope.email = '';
    $scope.password = '';

    if (userService.checkIfLoggedIn())
        $location.path('/');

}]);