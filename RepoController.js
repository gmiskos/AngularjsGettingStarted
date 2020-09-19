(function(){

    var app = angular.module("myApp");

    var RepoController = function($scope, $routeParams, github){
        $scope.username = $routeParams.username;
        $scope.reponame = $routeParams.reponame;

        var onRepo = function(data){
            $scope.repo = data;
        }

        var onError = function(reason){
            $scope.error = reason;
        }

        github.getRepoDetails($scope.username, $scope.reponame)
            .then(onRepo, onError);
    };

    app.controller("RepoController", ["$scope", "$routeParams", "github", RepoController]);
}());
