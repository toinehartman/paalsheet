'use strict';

angular.module('paalsheetApp', ['paalsheetApp.auth', 'paalsheetApp.admin', 'paalsheetApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(false);
  });
