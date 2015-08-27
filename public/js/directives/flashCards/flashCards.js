app.directive("flashCard",function(ScoreFactory){
  return {
    restrict: "E",
    templateUrl: "js/directives/flashCards/flashCards.html",
    scope: {card: '='},
    link: function (scope, element, attribute) {
    	scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
	 		flashCard.answered = true;
	 		flashCard.answeredCorrectly = answer.correct;
	 		if(flashCard.answeredCorrectly){
	 			ScoreFactory.correct++;
	 		}else{
	 			ScoreFactory.incorrect++;
	 		}
	 	}
	 };
    }
  };
});
