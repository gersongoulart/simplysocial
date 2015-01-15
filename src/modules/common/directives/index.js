'use strict';

module.exports =
  angular.module('SimplySocial.common.directives', [])
    .directive('fieldText', require('./fieldTextDirective'))
    .directive('post', require('./postDirective'));
