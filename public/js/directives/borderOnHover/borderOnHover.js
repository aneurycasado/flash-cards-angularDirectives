app.directive("borderOnHover", function () {
	return {
		restrict: "A",
		link: function (scope, element, attribute) {
			element.on("mouseenter", function () {
				console.log(element);
				angular.element(element[0].parentNode).css("border", "10px solid green");
			});
			element.on("mouseleave", function () {
				console.log(element);
				angular.element(element[0].parentNode).css("border", "1px solid black");
			});
		}
	};
});