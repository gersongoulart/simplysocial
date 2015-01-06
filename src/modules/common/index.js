'use strict';

module.exports =
  angular.module('SimplySocial.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
