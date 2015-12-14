angular.module('CalcApp')
.controller('NewMealController', ['$scope', 'earningsFactory', function($scope, earningsFactory){
	
	//TODO: We probably have to keep track of the running total
	//with rootscope or factory
	var vm = this;
	vm.meal = getNewMeal();
	earnings = earningsFactory.getEarnings();
	
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
		vm.meal.subtotal = getSubtotal();
		vm.meal.tipAmount = getTipAmount();
		vm.meal.totalAmount = getTotal();
		earnings.mealCount++;
		earnings.tipTotal += vm.meal.tipAmount;
	};

	$scope.cancel = function(){
		$scope.message = '';
		vm.meal = getNewMeal();
	};

	function getSubtotal(){
		return vm.meal.price + getTaxAmount();
	}

	function getTotal(){
		return getSubtotal() + getTipAmount();
	}

	function getTipAmount(){
		return vm.meal.price * (vm.meal.tipPercentage/100);
	}

	function getTaxAmount(){
		return  vm.meal.price * (vm.meal.taxRate/100);
	}

	function getNewMeal(){
		return {
			price : 0.00,
			taxRate : 0,
			tipPercentage : 0,
			subtotal : 0.00,
			tipAmount : 0.00,
			totalAmount : 0.00
		};
	}
}]);