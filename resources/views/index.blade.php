<!DOCTYPE html>
<html lang="en" ng-app="bookApp">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Book Application</title>

    <link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <script src="bower_components/angular/angular.min.js" defer></script>
    <script src="bower_components/lodash/lodash.js" defer></script>
    <script src="bower_components/angular-route/angular-route.min.js" defer></script>
    <script src="bower_components/angular-local-storage/dist/angular-local-storage.min.js" defer></script>
    <script src="bower_components/restangular/dist/restangular.min.js" defer></script>
    <script src="bower_components/jquery/dist/jquery.min.js" defer></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.min.js" defer></script>
    <script src="app/app.js" defer></script>
    <script src="app/controllers/loginCtrl.js" defer></script>
    <script src="app/controllers/mainCtrl.js" defer></script>
    <script src="app/controllers/registerCtrl.js" defer></script>
    <script src="app/services/bookService.js" defer></script>
    <script src="app/services/userService.js" defer></script>

    <style>

        li {
            padding-bottom: 8px;
        }

    </style>
</head>

<body>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>Book Application</h1>
        </div>
    </div>
    <div ng-view></div>
</div>

</body>
</html>