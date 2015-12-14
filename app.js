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
