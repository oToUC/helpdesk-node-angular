/**
 * Created by hyamaji on 9/23/2015.
 */
angular.module('HelpDesk').filter('pagination', function() {
    return function(items, start) {
        if(typeof items == 'undefined') return;
        start = parseInt(start, 10);
        return items.slice(start);
    };
})
