'use strict';

module.exports = /*@ngInject*/
  function fieldTextDirective() {
    return {
      restrict: 'C',
      scope: '=',
      link: function(scope, element) {
        element.find('input')
	        .on('focus', function(){
	        	angular.element(this.parentNode).addClass('field-text--focus');
	        })
	        .on('blur', function(){
	        	angular.element(this.parentNode).removeClass('field-text--focus');
	        });
      }
    };
  };
