var app = angular.module('flashCards', []);

app.factory("FlashCardsFactory", function($http){
  var obj = {};
  obj.getFlashCards = function(category){
    var route = "/cards"
    if(category){
      route = '/cards?category='+category;
    }
    return $http.get(route).then(function (response) {
                return response.data;
            });
  };
  obj.establishActive = function(category){

  }
  return obj;
});
