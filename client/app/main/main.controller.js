'use strict';

(function() {

  class MainController {

    constructor($http) {
      this.$http = $http;
      this.awesomeThings = [];
    }

    $onInit() {
      this.$http.get('/api/bondsleden')
        .then(response => this.bondsleden = response.data);

      var timetable = new Timetable();

      timetable.setScope(7,3)

      timetable.addLocations(['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag']);

      timetable.addEvent('Sightseeing', 'Maandag', new Date(2016,7,17,10,45), new Date(2016,7,17,12,30), '#');
      timetable.addEvent('Zumba', 'Dinsdag', new Date(2016,7,17,12), new Date(2016,7,17,13), '#');
      timetable.addEvent('Zumbu', 'Dinsdag', new Date(2016,7,17,13,30), new Date(2016,7,17,15), '#');
      timetable.addEvent('Lasergaming', 'Donderdag', new Date(2016,7,17,17,45), new Date(2016,7,17,19,30), '#');
      timetable.addEvent('Tokyo Hackathon Livestream', 'Woensdag', new Date(2016,7,17,12,30), new Date(2016,7,17,16,15)); // url is optional and is not used for this event

      var renderer = new Timetable.Renderer(timetable);
      renderer.draw('.timetable');
    

    }
  }

  angular.module('paalsheetApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
