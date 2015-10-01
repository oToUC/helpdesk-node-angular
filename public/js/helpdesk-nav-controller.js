/**
 * Created by hiroko on 9/22/15.
 */
(function(){
    "use strict";

    // Controller - List
    angular.module('HelpDesk')
        .controller('NavController', ['$scope', '$location', function($scope, $location){
            $scope.isActive = function(route) {
                if(route === $location.path()){
                    return true;
                }else if(route === '/list' && $location.path().indexOf('/detail') > -1){
                    return true;
                }
            }

        }]);// end of Controller

    // Hide menu when clicked
    $(document).ready(function () {
        $(".navbar-nav li a").click(function(event) {
            $(".navbar-collapse").collapse('hide');
        });
    });

}());