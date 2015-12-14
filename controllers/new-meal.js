angular.module('CalcApp')
.controller('NewMealController', ['$scope', 'earningsService', 'mealService', function($scope, earningsService, mealService){
	var vm = this;
	vm.meal = mealService.meal;
	earnings = earningsService.getEarnings();
	
	$scope.message = '';

	$scope.calculate = function(){
		if(!angular.isNumber(vm.meal.price)){
			$scope.message = 'Base meal price is not a valid number';
			$scope.calcForm.$invalid = true;
			return;
		}
		else if(!angular.isNumber(vm.meal.taxRate)){
			$scope.message = 'Tax rate is not a valid number';
			$scope.calcForm.$invalid = true;
			return;
		}
		else if(!angular.isNumber(vm.meal.tipPercentage)){
			$scope.message = 'Tip percentage is not a valid number';
			$scope.calcForm.$invalid = true;
			return;
		}

		$scope.message = '';
		vm.meal.subtotal = mealService.getSubtotal();
		vm.meal.tipAmount = mealService.getTipAmount();
		vm.meal.totalAmount = mealService.getTotal();
		earnings.mealCount++;
		earnings.tipTotal += vm.meal.tipAmount;
	};

	$scope.cancel = function(){
		$scope.message = '';
		vm.meal = mealService.getNewMeal();
	};

}]);