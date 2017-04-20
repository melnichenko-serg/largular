/**
 * Created by MacBookPro on 4/20/17.
 */

angular.module('bookAppControllers', ['bookAppServices'])
    .controller('loginCtrl', ['$scope', '$location', 'userService', function ($scope, $location, userService) {

    $scope.login = function() {
        userService.login(
            $scope.email, $scope.password,
            function(){
                $location.path('/');
            },
            function(){
                alert('Something went wrong with the login process. Try again later!');
            }
        );
    };

    $scope.email = '';
    $scope.password = '';

    if(userService.checkIfLoggedIn())
        $location.path('/');

}]);