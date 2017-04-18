'use strict';

angular.module('tabApp', [])
    .controller('TabController', ['$scope', '$window', '$http', '$sce', function($scope, $window, $http, $sce) {
        $scope.tab = 1;
        $scope.$sce = $sce;

        $scope.data1 = $window.data1;
        $scope.data2 = $window.data2;
        $scope.data3 = $window.data3;

        $scope.setTab = function(newTab){
            $scope.tab = newTab;
        };

        $scope.isSet = function(tabNum){
            return $scope.tab === tabNum;
        };

        $scope.authors = ['Hemingway', 'Dickens', 'Shakespeare'];
    }])
