var app = angular.module('flashCards', []);

app.factory("FlashCardsFactory", function($http){
  var obj = {};
  obj.getFlashCards = function(category){
    var route = "/cards"
    if(category!==undefined){
      route = '/cards?category='+category;
    }
    console.log(route);
    return $http.get(route).then(function (response) {
                return response.data;
            });
  };
  obj.establishActive = function(category){

  }
  return obj;
});


app.factory('ScoreFactory', function(){
  return {
    correct: 0,
    incorrect: 0
  };
});

app.controller('StatsController', function ($scope, ScoreFactory) {
    $scope.scores = ScoreFactory;
});
