(function(){
	"use strict";

	// Controller - List
	angular.module('HelpDesk')
		.controller('ListController', ['$scope', 'HelpdeskService', function($scope, HelpdeskService){

			$scope.itemsPerPage = 10;
			$scope.currentPage = 0;

			$scope.showData = function(sortKey){
				console.log('showData : ' +  sortKey);
				HelpdeskService.getTickets(sortKey).then(function(data){
					$scope.tickets = data.data;

					/*pagination */




				}, function(){
					console.log('ERROR: getTickets');
				});
			};


		}]);// end of Controller
}());

/*
Pagination Sample
http://stackoverflow.com/questions/10816073/how-to-do-paging-in-angularjs
 http://plnkr.co/edit/6PFCPuFrN6lfGHjHVwGf?p=preview
*/
