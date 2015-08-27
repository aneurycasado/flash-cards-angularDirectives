app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	$scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
	];
	$scope.reset = function(){
		$scope.flashCards = $scope.getFlashCards();
		ScoreFactory.correct = 0;
		ScoreFactory.incorrect = 0;
	};

	$scope.cardsLoaded = false;

	$scope.getFlashCards = function(category){
		$scope.activeCategory = category;
		FlashCardsFactory.getFlashCards(category).then(function(cards){
			$scope.cardsLoaded = true;
			$scope.flashCards = cards;
			return cards;
		});
	};

	$scope.flashCards = $scope.getFlashCards();
	
});
