(function(){
	"use strict";

	angular.module('HelpDesk')
		.config(['$routeProvider', function($routeProvider){
	    $routeProvider
			.when('/add', {
				templateUrl: 'templates/add.html',
				controller: 'AddController',
			})
	        .when('/list', {
	            templateUrl: 'templates/list.html',
	            controller: 'ListController',
	        })
	        .when('/detail/:ticketId', {
	        	templateUrl: 'templates/detail.html',
	        	controller: 'DetailController',
	        })
			.when('/about', {
				templateUrl: 'templates/about.html'
			})
	        .otherwise({
	            redirectTo: '/add'
	        });
	}]);

}()); // end of outer 


