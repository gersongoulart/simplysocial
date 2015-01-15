'use strict';

module.exports =
  angular.module('SimplySocial.home', [])
    .config(function ($stateProvider) {
      $stateProvider
        .state('home', {
          url: '',
          templateUrl: 'app/home/layout.html',
          controller: 'homeController'
        });
    })
    .controller('homeController', require('./homeController'));
