(function () {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'houseList',
      })
      .state({
        name: 'new',
        url: '/houses/new',
        component: 'houseNew',
      })
      .state({
        name: 'show',
        url: '/houses/{houseId}',
        component: 'houseShow'
      });
  }
}());
