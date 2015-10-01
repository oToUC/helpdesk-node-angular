var myapp = angular.module('sampleapp', [ ]);

myapp.controller('samplecontoller', function ($scope) {


    $scope.showData = function( ){

        $scope.itemsPerPage = 3;
        $scope.currentPage = 0;
        $scope.datalists = [
            { "name": "John","age":"16","Designation":"SW"},
            {"name": "John2","age":"21","Designation":"SW1"},
            {"name": "John3","age":"19","Designation":"SW2"},
            {"name": "John4","age":"17","Designation":"SW3"},
            {"name": "John5","age":"21","Designation":"SW4"},
            {"name": "John6","age":"31","Designation":"SW5"},
            {"name": "John7","age":"41","Designation":"SW6"},
            {"name": "John8","age":"13","Designation":"SW7"},
            {"name": "John18","age":"15","Designation":"SW8"},
            {"name": "John28","age":"16","Designation":"SW9"},
            {"name": "John38","age":"18","Designation":"SW10"},
            {"name": "John48","age":"19","Designation":"SW11"},
            {"name": "John58","age":"21","Designation":"SW12"},
            {"name": "John68","age":"22","Designation":"SW13"},
            {"name": "John68","age":"23","Designation":"SW14"},
            {"name": "John68","age":"24","Designation":"SW15"},
            {"name": "John68","age":"26","Designation":"SW16"},
            {"name": "John68","age":"56","Designation":"SW17"},
            {"name": "John28","age":"16","Designation":"SW18"},
            {"name": "John38","age":"45","Designation":"SW19"},
            {"name": "John48","age":"56","Designation":"SW20"},
            {"name": "John58","age":"45","Designation":"SW21"},
            {"name": "John68","age":"44","Designation":"SW22"},
            {"name": "John68","age":"67","Designation":"SW23"},
            {"name": "John68","age":"65","Designation":"SW24"},
            {"name": "John68","age":"12","Designation":"SW25"},
            {"name": "John68","age":"33","Designation":"SW26"},
            {"name": "John28","age":"22","Designation":"SW27"},
            {"name": "John38","age":"16","Designation":"SW28"},
            {"name": "John48","age":"16","Designation":"SW29"},
            {"name": "John58","age":"45","Designation":"SW30"},
            {"name": "John68","age":"34","Designation":"SW31"},
            {"name": "John68","age":"36","Designation":"SW32"},
            {"name": "John68","age":"22","Designation":"SW33"},
            {"name": "John68","age":"22","Designation":"SW34"},
            {"name": "John48","age":"34","Designation":"SW"},
            {"name": "John58","age":"14","Designation":"SW"},
            {"name": "John68","age":"33","Designation":"SW"},
            {"name": "John68","age":"12","Designation":"SW1"}



        ]
        $scope.range = function() {
            var rangeSize = 4;
            var ps = [];
            var start;

            start = $scope.currentPage;
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
            return $scope.currentPage === 0 ? "disabled" : "";
        };

        $scope.pageCount = function() {
            return Math.ceil($scope.datalists.length/$scope.itemsPerPage)-1;
        };

        $scope.nextPage = function() {
            if ($scope.currentPage < $scope.pageCount()) {
                $scope.currentPage++;
            }
        };

        $scope.DisableNextPage = function() {
            return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
        };

        $scope.setPage = function(n) {
            $scope.currentPage = n;
        };

    }

});

angular.module('sampleapp').filter('pagination', function()
{
    return function(input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
});

