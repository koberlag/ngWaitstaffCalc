angular.module('CalcApp')
.factory('mealService', function(){
	var service = {};

	service.getTaxAmount = function(){
		return  service.meal.price * (service.meal.taxRate/100);
	};
	
	service.getTipAmount = function(){
		return service.meal.price * (service.meal.tipPercentage/100);
	};

	service.getSubtotal = function(){
		return service.meal.price + service.getTaxAmount();
	};

	service.getTotal = function (){
		return service.getSubtotal() + service.getTipAmount();
	};

	service.getNewMeal = function(){
		service.meal = {
			price : 0.00,
			taxRate : 0,
			tipPercentage : 0,
			subtotal : 0.00,
			tipAmount : 0.00,
			totalAmount : 0.00
		};
		return service.meal;
	};
	
	service.getNewMeal();

	return service;
});