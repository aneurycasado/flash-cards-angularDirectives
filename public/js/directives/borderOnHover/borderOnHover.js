app.directive("borderOnHover", function () {
	return {
		restrict: "A",
		link: function (scope, element, attribute) {
			element.on("mouseenter", function () {
				if (!scope.card.answered) {
					angular.element(element[0].parentNode).css("border", "10px solid blue");
				}
			});
			element.on("mouseleave", function () {
				//console.log(element);
				if (!scope.card.answered) {
					angular.element(element[0].parentNode).css("border", "1px solid black");
				}
			});

		}
	};
});