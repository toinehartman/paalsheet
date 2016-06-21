'use strict';

angular.module('paalsheetApp.auth', ['paalsheetApp.constants', 'paalsheetApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
