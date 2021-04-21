var app = angular.module("ComposersApp", []);
app.controller("ComposersController", function($scope){
    $scope.pieces = [
        {"pic":"pics/bach.jpg", "composer":"Bach", "title":"Goldberg Variations"},
        {"pic":"pics/bach.jpg", "composer":"Bach", "title":"Harpsichord Concerto"},
        {"pic":"pics/bach.jpg", "composer":"Bach", "title":"Brandenburg Concerto"},
        {"pic":"pics/bach.jpg", "composer":"Bach", "title":"Air On G"},
        {"pic":"pics/bach.jpg", "composer":"Bach", "title":"Cantata #85"},
        {"pic":"pics/beethoven.jpg", "composer":"Beethoven", "title":"Symphony #9"},
        {"pic":"pics/beethoven.jpg", "composer":"Beethoven", "title":"Fur Elise"},
        {"pic":"pics/beethoven.jpg", "composer":"Beethoven", "title":"Moonlight Sonata"},
        {"pic":"pics/beethoven.jpg", "composer":"Beethoven", "title":"Violin Concerto"},
        {"pic":"pics/beethoven.jpg", "composer":"Beethoven", "title":"Egmont Overture"},
        {"pic":"pics/mozart.jpg", "composer":"Mozart", "title":"Eine Kleine Nachtmusic"},
        {"pic":"pics/mozart.jpg", "composer":"Mozart", "title":"Piano Concerto #21"},
        {"pic":"pics/mozart.jpg", "composer":"Mozart", "title":"Don Giovanni"},
        {"pic":"pics/mozart.jpg", "composer":"Mozart", "title":"Jupiter Symphony"},
        {"pic":"pics/mozart.jpg", "composer":"Mozart", "title":"Clarinet Concerto #3"}
    ];
});