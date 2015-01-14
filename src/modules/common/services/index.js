'use strict';

module.exports =
  angular.module('SimplySocial.common.services', [])
	  .factory('pubsubService', require('./pubsubService'))
	  .run(function ($rootScope, pubsubService) {
        pubsubService.Initialize($rootScope);
      });
