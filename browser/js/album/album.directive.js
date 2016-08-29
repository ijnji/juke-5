'use strict';

juke.directive('albumList', function () {
    return {
        restrict: 'E',
        scope: {
            albums: '='
        },
        templateUrl: '/js/album/templates/album-list.html'
    }
});
