'use strict';

module.exports = /*@ngInject*/
  function dialogDirective() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      // scope: {},
      templateUrl: 'app/dialog/layout.html',
      link: function (scope, element) {
        // Dialog Open
        scope.open = function(data){
          var body = angular.element( document.getElementsByTagName('body')[0] );
          body.addClass('dialog--visible');
          element.find('textarea')[0].focus();
        };

        // Dialog Close
        scope.close = function(data){
          var body = angular.element( document.getElementsByTagName('body')[0] );
          body.removeClass('dialog--visible');
        };

        // Subscribe to system-wide events
        scope.subscribe('dialog.open', scope.open);
        scope.subscribe('dialog.close', scope.close);
      }
    };
  };
