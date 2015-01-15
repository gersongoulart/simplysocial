'use strict';

module.exports =
  angular.module('SimplySocial.common.filters', [])
    .filter('links', require('./linksFilter'));
