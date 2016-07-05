'use strict';

(function () {

  class MainController {

    constructor($http) {
      this.$http = $http;
    }

    $onInit() {
      // this.$http.get('/api/bondsleden')
      //   .then(response => {
      //     this.bondsleden = response.data
      //   console.log(this.bondsleden)
      //   })
        
      var timetable = new Timetable();
      timetable.setScope(17, 3)
      timetable.addLocations(['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag']);

      function day(date) {
        var realdate = new Date(date);
        // if (realdate.getHours() <= 5) {
        //   realdate.setDate(date.getDate() - 1)
        // }

        // console.log(date, realdate)
        // console.log(date.getDay(), realdate.getDay())

        return {
          0: 'Zondag',
          1: 'Maandag',
          2: 'Dinsdag',
          3: 'Woensdag',
          4: 'Donderdag'
        }[realdate.getDay()];
      }

      Promise.all([
        this.$http.get('/api/onderdelen'),
        this.$http.get('/api/taken')
      ]).then(values => {
        var onderdelen = values[0].data;
        var taken = values[1].data;

        // console.log('Onderdelen:', onderdelen)
        // console.log('Taken:', taken)

        _.forEach(onderdelen, function (o) {
          // console.log(o);
          var s = new Date(o.start);
          var e = new Date(o.eind);

          timetable.addEvent(o.titel, day(s), s, e, o._id);

          var renderer = new Timetable.Renderer(timetable);
          renderer.draw('.timetable');
        });

        $('.time-entry').each(function (_, el) {
          var id = $(this).attr('href');
          $(this).removeAttr('href');
          $(this).attr('id', id);
          $(this).click((event) => {
            var curTar = event.currentTarget;
            var modal = $('#myModal');
            modal.modal();
            modal.find('.modal-title').text('Onderdelen voor ' + curTar.innerText);
            var body = modal.find('.modal-body');
            body.text('');
            var t = taken.filter((t) => t.onderdeel._id == curTar.id);
            body.append('<form>')
            t.forEach(function(entry) {
              console.log(entry);
              body.append('<input type="checkbox", id="' + entry._id + '"> ' + entry.titel + '<br>')
            })
            body.append('</form>')
          });
        });
      });
    }
  }

  angular.module('paalsheetApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
