'use strict';

module.exports = /*@ngInject*/
  function navbarDirective() {
    return {
      restrict: 'E',
      transclude: true,
      // require: 'dialog',
      templateUrl: 'app/navbar/layout.html',
      // scope: {},
      link: function(scope, element, attrs, dialogCtrl) {
      	scope.newMessage = function(){
      		scope.publish('dialog.open');
      	};
      }
    };
  };
