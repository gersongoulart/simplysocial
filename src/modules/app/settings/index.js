'use strict';

module.exports =
  angular.module('SimplySocial.settings', [])
    .config(function ($stateProvider) {
      $stateProvider
        .state('settings', {
          url: '/settings',
          templateUrl: 'app/settings/layout.html'
        });
    });
