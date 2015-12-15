angular.module('CalcApp', ['ngRoute', 'ngAnimate'])
.run(function($rootScope, $location, $timeout) {
   	$rootScope.$on('$routeChangeError', function(){
    	$location.path('/error');
    });
	$rootScope.$on('$routeChangeStart', function() {
		$rootScope.isLoading = true;
	});
	$rootScope.$on('$routeChangeSuccess', function() {
	  	$rootScope.isLoading = false;
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
