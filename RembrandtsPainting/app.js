var app = angular.module("RembrandtApp", []);
app.controller("PaintingController", function($scope){
    $scope.paintingCount = 0; 
    $scope.paintings = [
        "paintings/rem7.jpg",
        "paintings/rem10.jpg",
        "paintings/rem11.jpg",
        "paintings/rem12.jpg",
        "paintings/rem13.jpg",
        "paintings/rem14.jpg",
        "paintings/rem15.jpg",
        "paintings/rem16.jpg"
    ];

    $scope.next = function(){
        $scope.paintingCount++;
        $scope.myDynamicClass = 'w3-center w3-animate-bottom';
    }

    $scope.previous = function(){
        $scope.paintingCount--;
        $scope.myDynamicClass = 'w3-center w3-animate-top';
    }
});