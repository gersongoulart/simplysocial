'use strict';

module.exports =
  angular.module('SimplySocial.home', [
    //load your home submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'app/home/layout.html',
      controller: 'homeController'
    });
  })
  .controller('homeController', require('./homeController'));
