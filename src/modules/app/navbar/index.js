'use strict';

module.exports =
  angular.module('SimplySocial.navbar', [])
  // .config(function () {})
  // .controller('navbarController', require('./navbarController'))
    .directive('navbar', require('./navbarDirective'));
