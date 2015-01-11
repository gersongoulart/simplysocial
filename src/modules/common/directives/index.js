'use strict';

module.exports =
  angular.module('SimplySocial.common.directives', [])
    .directive('post', require('./postDirective'));
