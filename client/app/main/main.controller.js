'use strict';

(function($scope) {

  class MainController {

    constructor($http) {
      this.$http = $http;
      this.awesomeThings = [];
    }

    $onInit() {
      $scope.eventSources = [];
      this.$http.get('/api/bondsleden')
        .then(response => this.bondsleden = response.data);
    }
  }

  angular.module('paalsheetApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
