(function(){
    "use strict";

    angular.module('HelpDesk').directive('datePicker', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            //replace: true,
            //template: '<input type="text" class="form-control" name="closedDate" ng-model="myticket.closedDate" required/>',
            link: function (scope, element, attrs) {
                $(element).datepicker({
                    dateFormat: 'mm-dd-yy',
                    onSelect: function (date) {
                        if (typeof date !== "undefined"){
                            scope.ticket.closedDate = date;
                            scope.$apply();
                        }
                    }
                });
            }
        };
    });

}());


