angular.module('CalcApp', ['ngRoute'])
.run(function($rootScope, $location) {
   	$rootScope.$on('$routeChangeError', function(){
    	$location.path('/error');
    });
})
.config(['$routeProvider', function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'templates/home.html',
		controller : 'HomeController as home'
	})
	.when('/new-meal', {
		templateUrl : 'templates/new-meal.html',
		controller : 'NewMealController as newMeal'
	})
	.when('/my-earnings', {
		templateUrl : 'templates/my-earnings.html',
		controller : 'MyEarningsController as myEarnings'
	})
	.when('/error', {
    	template : '<p>Error - Page Not Found</p>'
	})
	.otherwise("/");
}]);
// .controller('CalculatorController', ['$scope', function($scope){
// 	$scope.instance = {
// 		basePrice : 0.00,
// 		taxRate : 0.00,
// 		tipPercentage : 0.00,
// 		subtotal : 0.00,
// 		tipAmount : 0.00,
// 		totalAmount : 0.00,
// 		reset:function(){
// 			this.basePrice = 0.00;
// 			this.taxRate = 0.00;
// 			this.tipPercentage = 0.00;
// 			this.subtotal = 0.00;
// 			this.tipAmount = 0.00;
// 			this.totalAmount = 0.00;
// 		}
// 	};
	
// 	$scope.runningTotal = {
// 		tipTotal : 0.00,
// 		mealCount : 0,
// 		averageTipPerMeal : 0.00,
// 		reset:function(){
// 			this.tipTotal = 0.00;
// 			this.mealCount = 0;
// 			this.averageTipPerMeal = 0.00;
// 		}
// 	};
	
// 	$scope.message = '';

// 	$scope.calculate = function(){
// 		if(!angular.isNumber($scope.instance.basePrice)){
// 			$scope.message = 'Base meal price is not a valid number';
// 			$scope.calcForm.$invalid = true;
// 			return;
// 		}
// 		else if(!angular.isNumber($scope.instance.taxRate)){
// 			$scope.message = 'Tax rate is not a valid number';
// 			$scope.calcForm.$invalid = true;
// 			return;
// 		}
// 		else if(!angular.isNumber($scope.instance.tipPercentage)){
// 			$scope.message = 'Tip percentage is not a valid number';
// 			$scope.calcForm.$invalid = true;
// 			return;
// 		}

// 		$scope.message = '';
// 		$scope.instance.subtotal = getSubtotal();
// 		$scope.instance.tipAmount = getTipAmount();
// 		$scope.instance.totalAmount = getTotal();
// 		$scope.runningTotal.mealCount++;
// 		$scope.runningTotal.tipTotal += $scope.instance.tipAmount;
// 		$scope.runningTotal.averageTipPerMeal = getAverageTipPerMeal();
// 	};

// 	$scope.cancel = function(){
// 		$scope.message = '';
// 		$scope.instance.reset();
// 	};

// 	$scope.reset = function(){
// 		$scope.message = '';
// 		$scope.instance.reset();
// 		$scope.runningTotal.reset();
// 	};

// 	function getSubtotal(){
// 		return $scope.instance.basePrice + getTaxAmount();
// 	}

// 	function getTotal(){
// 		return getSubtotal() + getTipAmount();
// 	}

// 	function getTipAmount(){
// 		return $scope.instance.basePrice * ($scope.instance.tipPercentage/100);
// 	}

// 	function getTaxAmount(){
// 		return $scope.instance.basePrice * ($scope.instance.taxRate/100);
// 	}

// 	function getAverageTipPerMeal(){
// 		return $scope.runningTotal.tipTotal / $scope.runningTotal.mealCount;
// 	}

// }]);
