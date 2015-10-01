(function(){
    "use strict";

    // Controller - List
    angular.module('HelpDesk')
        .controller('AddController', ['$scope', 'HelpdeskService', '$location', function($scope, HelpdeskService, $location){


            // Get all profile
            HelpdeskService.getProfiles().then(function(data){
                $scope.profiles = data.data;
            }, function(){
                console.log('ERROR: getProfile');
            });

            // Get all department
            HelpdeskService.getDepartments().then(function(data){
                $scope.departments = data.data;
            }, function(){
                console.log('ERROR: getDepartment');
            });

            // Add Ticket
            $scope.add = function(isValid){

                if(isValid){
                    HelpdeskService.addTicket($scope.newticket).then(function(response){
                        console.log(response.data);
                        // clear input form
                        $scope.newticket = {};
                        // Show alert
                        $scope.showAlert = true;
                        $scope.alertClass = 'alert alert-success';
                        $scope.alertMsg = 'Success! your ticket has been added.';
                        // reset form
                        $scope.ticketEntryForm.$setPristine();
                    }, function(){
                        console.log("ERROR: addTicket");
                        $scope.showAlert = true;
                        $scope.alertClass = 'alert alert-danger';
                        $scope.alertMsg = 'Error! Please contact system administrator.';
                    });
                }

            };


        }]);// end of AddController


}());

