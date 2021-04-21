var app = angular.module("TopSingersApp", []);
app.controller("TopSingersController", function($scope){
    $scope.singers = [
        {"pic":"pics/1.png", "name":"lady gaga","gender":"female", "quality":"pics/like.png"},
        {"pic":"pics/2.png", "name":"beyonce","gender":"female", "quality":"pics/dislike.png"},
        {"pic":"pics/3.png", "name":"celine dion","gender":"female", "quality":"pics/like.png"},
        {"pic":"pics/4.png", "name":"michael jackson","gender":"male", "quality":"pics/dislike.png"},
        {"pic":"pics/5.png", "name":"sarkodie","gender":"male", "quality":"pics/like.png"},
        {"pic":"pics/6.png", "name":"shatta wale","gender":"male", "quality":"pics/like.png"},
        {"pic":"pics/7.png", "name":"yaw tog","gender":"male", "quality":"pics/like.png"},
        {"pic":"pics/8.png", "name":"ariana grande","gender":"female", "quality":"pics/dislike.png"}
    ];
});