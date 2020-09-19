(function(){

    var app = angular.module("myApp");

    var MainController = function($scope,  $interval, $location){

        $scope.search = function(username){
            if(countdownInterval){
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            $location.path("/user/"+username);
        }

        var countdownInterval = null;
        var decrementCountDown = function(){
            $scope.countdown -= 1;
            if($scope.countdown < 1){
                $scope.search($scope.username);
            }
        }

        var startCountDown = function(){
           countdownInterval = $interval(decrementCountDown, 1000, $scope.countdown);
        }

        $scope.username = "angular";
        $scope.countdown = 5;

        startCountDown();
    }

    app.controller("MainController", ["$scope", "$interval", "$location", MainController]);

}());