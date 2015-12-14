angular.module('CalcApp')
.factory('earningsService', function(){
	var service = {};

	service.getNewEarnings = function(){
		service.earnings = {
			mealCount : 0,
			tipTotal : 0.00,
			averageTipPerMeal : 0.00
		};
		return service.earnings;
	};
	
	service.getEarnings = function(){
		service.earnings.averageTipPerMeal = service.earnings.tipTotal / service.earnings.mealCount;
		return service.earnings;
	};

	service.getNewEarnings();

	return service;
});