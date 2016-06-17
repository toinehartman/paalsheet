'use strict';

angular.module('paalsheetApp', ['paalsheetApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ngRoute', 'ui.bootstrap'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
