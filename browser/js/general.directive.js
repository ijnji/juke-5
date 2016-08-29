'use strict'

juke.directive('blink', function ($interval) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      var state = 'visible';
      $interval(function () {
        state = (state == 'visible' ? 'hidden' : 'visible');
        element.css('visibility', state);
      }, 1000);
    }
  };
});

juke.directive('uponMouseover', function () {
  return {
    restrict: 'A',
    scope: {
      uponMouseover: '&'
    },
    link: function (scope, element) {
      element.on('mouseover', function () {
        scope.uponMouseover();
      });
    }
  };
});