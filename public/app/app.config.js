angular.module('ebayApp').config(['$routeProvider',function config($routeProvider){
	$routeProvider.when('/',{
		template: '<signin-home></signin-home>'
	}).
	when('/home',{
		template: '<home-page></home-page>'
	}).
	otherwise('/');
}]);
