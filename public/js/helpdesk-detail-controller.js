(function(){
	"use strict";

	angular.module('HelpDesk')
		.controller('DetailController', ['$scope', 'HelpdeskService', '$location','$routeParams',  function($scope, HelpdeskService, $location, $routeParams){

			var id = $routeParams.ticketId;

			// Get contact by Id
			HelpdeskService.getTicket(id).then(function(data){
				console.log(data);
				$scope.ticket = data.data;
				$scope.status
			}, function(){
				console.log('ERROR');
			});

			// Update data
			$scope.updateTicket = function(isValid, id){
				console.log('updateTicket');

				if(isValid){
					HelpdeskService.updateTicket($scope.ticket, id).then(function(response){
						console.log($scope.ticket);
						$scope.showAlert = true; //show alert
						$scope.alertClass = 'alert alert-success';
						$scope.alertMsg = 'Your ticket has been updated!';

					}, function(){
						console.log('ERROR');
						$scope.showAlert = true; //show alert
						$scope.alertClass = 'alert alert-danger';
						$scope.alertMsg = 'Error! Please contact system administrator.';

					});
				}
			}// end of update

		}]);// end of ContactEditController

}()); // end of (outer function)


