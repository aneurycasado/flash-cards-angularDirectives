app.directive("flashCard",function(ScoreFactory){
  return {
    restrict: "E",
    templateUrl: "js/directives/flashCards/flashCards.html",
    scope: {card: '='},
    link: function (scope, element, attribute) {
    	scope.borderColor = "blue";

    	scope.answerQuestion = function (answer, flashCard) {
    		console.log(scope.borderColor);
			if (!flashCard.answered) {
		 		flashCard.answered = true;
		 		flashCard.answeredCorrectly = answer.correct;
		 		if(flashCard.answeredCorrectly){
		 			ScoreFactory.correct++;
		 		}else{
		 			ScoreFactory.incorrect++;
		 		}
		 	}
	 		if (flashCard.answeredCorrectly) {
	 			// console.log("flashcard: ", flashCard);
	 			// console.log("card: ", scope.card);
				scope.borderColor = "green";
			}
			else if (flashCard.answeredCorrectly === false) {
				scope.borderColor = "red";
			}
			else {
				scope.borderColor = "blue";
			}
			angular.element(element[0].parentNode).css("border", "10px solid " + scope.borderColor);
		 };
    }
  };
});
