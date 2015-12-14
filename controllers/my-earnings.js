angular.module('CalcApp')
.controller('MyEarningsController', ['$scope', 'earningsFactory', function($scope, earningsFactory){
	var vm = this;
	vm.earnings = earningsFactory.getEarnings();
}]);