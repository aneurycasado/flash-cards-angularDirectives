app.controller('MainController', function ($scope, FlashCardsFactory) {
	$scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
	];
	$scope.getFlashCards = function(category){
		$scope.activeCategory = category;
		FlashCardsFactory.getFlashCards(category).then(function(cards){
			$scope.flashCards = cards;
			console.log($scope.flashCards);
		})
	};
	// $scope.answerQuestion = function (answer, flashCard) {
	// 	if (!flashCard.answered) {
	// 		flashCard.answered = true;
	// 		flashCard.answeredCorrectly = answer.correct;
	// 	}
	// }
});
