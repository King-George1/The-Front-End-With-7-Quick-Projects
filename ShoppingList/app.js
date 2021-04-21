var app = angular.module("ShoppingListApp", []);
app.controller("ListController", function($scope){
    $scope.list = ["Milk", "Cheese", "Eggs"];

    $scope.addItem = function(z){
        $scope.list.push(z);
    }

    $scope.removeItem = function(z){
        var item = $scope.list.indexOf(z);
        $scope.list.splice(item, 1);
    }
});