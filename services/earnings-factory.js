angular.module('CalcApp')
.factory('earningsFactory', function(){
	var service = {},
		earnings = {
			mealCount : 0,
			tipTotal : 0.00,
			averageTipPerMeal : this.tipTotal / this.mealCount
		};

	service.getEarnings = function(){
		return earnings;
	};
	
	return service;
});