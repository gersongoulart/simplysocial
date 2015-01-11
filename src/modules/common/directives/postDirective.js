'use strict';

module.exports = /*@ngInject*/
  function postDirective() {
    return {
      restrict: 'A',
      scope: '=',
      controller: function($scope) {
        $scope.toggleReplies = function(){
          $scope.post.showReplies = !$scope.post.showReplies;
        };
      }
    };
  };
