(function(){

    var app = angular.module("myApp");

    var UserController = function($scope, github, $routeParams){

        var onUserResponse = function(data){
            $scope.user = data;
            github.getRepos($scope.user)
                .then(onRepos, onError)
        };

        var onRepos = function(data){
            $scope.repos = data;
        };

        var onError = function(reason){
            $scope.error = "Could not fetch data!";
        };

        
        $scope.username = $routeParams.username;
        github.getUser($scope.username).then(onUserResponse, onError);
    }

    app.controller("UserController", ["$scope", "github",  "$routeParams", UserController]);

}());