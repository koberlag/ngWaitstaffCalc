angular.module('CalcApp')
.controller('MyEarningsController', ['$scope', 'earningsService', 'mealService', function($scope, earningsService, mealService){
	var vm = this;
	vm.earnings = earningsService.getEarnings();

	$scope.reset = function(){
		$scope.message = '';
		vm.earnings = earningsService.getNewEarnings();
		mealService.getNewMeal();
	};
}]);