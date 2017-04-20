/**
 * Created by MacBookPro on 4/20/17.
 */

angular.module('bookAppControllers', ['bookAppServices'])
    .controller('mainCtrl', ['$scope', '$location', 'userService', 'bookService', function ($scope, $location, userService, bookService) {

        $scope.logout = function () {
            userService.logout();
            $location.path('/login');
        };

        $scope.create = function () {

            bookService.create({
                title: $scope.currentBookTitle,
                author_name: $scope.currentBookAuthorName,
                pages_count: $scope.currentBookPagesCount
            }, function () {

                $('#addBookModal').modal('toggle');
                $scope.currentBookReset();
                $scope.refresh();

            }, function () {

                alert('Some errors occurred while communicating with the service. Try again later.');

            });

        };

        $scope.refresh = function () {

            bookService.getAll(function (response) {

                $scope.books = response;

            }, function () {

                alert('Some errors occurred while communicating with the service. Try again later.');

            });

        };

        $scope.load = function (bookId) {

            bookService.getById(bookId, function (response) {

                $scope.currentBookId = response.book.id;
                $scope.currentBookTitle = response.book.title;
                $scope.currentBookAuthorName = response.book.author_name;
                $scope.currentBookPagesCount = response.book.pages_count;

                $('#updateBookModal').modal('toggle');

            }, function () {

                alert('Some errors occurred while communicating with the service. Try again later.');

            });

        };

        $scope.update = function () {

            bookService.update(
                $scope.currentBookId,
                {
                    title: $scope.currentBookTitle,
                    author_name: $scope.currentBookAuthorName,
                    pages_count: $scope.currentBookPagesCount
                },
                function () {

                    $('#updateBookModal').modal('toggle');
                    $scope.currentBookReset();
                    $scope.refresh();

                }, function () {
                    alert('Some errors occurred while communicating with the service. Try again later.');
                }
            );
        };

        $scope.remove = function (bookId) {

            if (confirm('Are you sure to remove this book from your wishlist?')) {
                bookService.remove(bookId, function () {

                    alert('Book removed successfully.');

                }, function () {

                    alert('Some errors occurred while communicating with the service. Try again later.');

                });
            }

        };

        $scope.currentBookReset = function () {
            $scope.currentBookTitle = '';
            $scope.currentBookAuthorName = '';
            $scope.currentBookPagesCount = '';
        };

        // if (!userService.checkIfLoggedIn())
        //     $location.path('/login');

        $scope.books = [];

        $scope.currentBookReset();
        $scope.refresh();

    }]);