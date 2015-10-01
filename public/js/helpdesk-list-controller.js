(function(){
	"use strict";

	// Controller - List
	angular.module('HelpDesk')
		.controller('ListController', ['$scope', 'HelpdeskService', function($scope, HelpdeskService){

			$scope.itemsPerPage = 5;
			$scope.currentPage = 0;

			$scope.showData = function(sortKey){
				console.log('showData : ' +  sortKey);
				HelpdeskService.getTickets(sortKey).then(function(data){
					$scope.tickets = data.data;

					/*pagination */
					$scope.pageCount = function() {
						return Math.ceil($scope.tickets.length/$scope.itemsPerPage)-1;
					};

					$scope.range = function() {
						var rangeSize = 10;
						var rangeHalfSize = 5;
						var ps = [];
						var start;

						start = $scope.currentPage-rangeHalfSize; //pagination stop to refresh a fisrt half page.
						if(start < 0) start = 0;

						//  console.log($scope.pageCount(),$scope.currentPage)
						if ( start > $scope.pageCount()-rangeSize ) {
							start = $scope.pageCount()-rangeSize+1;
						}

						for (var i=start; i<start+rangeSize; i++) {
							if(i>=0)
								ps.push(i);
						}
						return ps;
					};

					$scope.prevPage = function() {
						if ($scope.currentPage > 0) {
							$scope.currentPage--;
						}
					};

					$scope.DisablePrevPage = function() {
						if($scope.tickets.length === 0 || $scope.currentPage === 0){
							return "disabled";
						}
					};



					$scope.nextPage = function() {
						if ($scope.currentPage < $scope.pageCount()) {
							$scope.currentPage++;
						}
					};

					$scope.DisableNextPage = function() {
						if( $scope.tickets.length === 0 || $scope.currentPage === $scope.pageCount() ){
							return "disabled";
						}
					};

					$scope.setPage = function(n) {
						$scope.currentPage = n;
					};
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
