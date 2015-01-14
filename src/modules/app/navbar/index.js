'use strict';

module.exports =
  angular.module('SimplySocial.navbar', [])
    .directive('navbar', require('./navbarDirective'));
