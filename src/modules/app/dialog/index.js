'use strict';

module.exports =
  angular.module('SimplySocial.dialog', [])
    .directive('dialog', require('./dialogDirective'));
