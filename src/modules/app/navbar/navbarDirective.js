'use strict';

module.exports = /*@ngInject*/
  function navbarDirective() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/navbar/layout.html'
      // scope: {},
      // controller: function($scope) {}
    };
  };
