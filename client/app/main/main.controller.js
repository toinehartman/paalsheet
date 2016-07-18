'use strict';

(function () {

  class MainController {

    constructor($http) {
      this.$http = $http;
      this.user = {
        firstname: '',
        lastname: '',
        email: '',
        tasks: []};
      this.userID = '';
    }

    $onInit() {
      // this.$http.get('/api/bondsleden')
      //   .then(response => {
      //     this.bondsleden = response.data
      //   console.log(this.bondsleden)
      //   })

      var $httpInit = this.$http
      var user = this.user
      var userID = this.user

      var inlogModal = $('#myInlogModal').modal(
      {
        backdrop: 'static',
        keyboard: false
      });

      

      $('#sbm-btn').click(function(event) {

        var formInVoornaam = $('#loginForm input:text#voornaam')[0].value;
        var formInAchternaam = $('#loginForm input:text#achternaam')[0].value;
        var formInEmail = $('#loginForm input#email')[0].value;

        if (((formInVoornaam || formInAchternaam || formInEmail) == '') 
          || !validateEmail(formInEmail)) {
           $('#errModal').modal()
        } else {
          $('#myInlogModal').modal('hide')
          user.firstname = formInVoornaam
          user.lastname = formInAchternaam
          user.email = formInEmail

          var stringJSON = JSON.stringify(user)
          $httpInit.post('/api/bondsleden', stringJSON)
            .then(successGetID, errorCallback);

          function successGetID (response) {
            userID = response.data._id
          }

        }

      });
        
      var timetable = new Timetable();
      timetable.setScope(16, 3)
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

          var options = {
            data: {
              id: o._id
            }
          }

          timetable.addEvent(o.titel, day(s), s, e, options);

          var renderer = new Timetable.Renderer(timetable);
          renderer.draw('.timetable');
        });

        var modal = $('#myModal');
        var body = modal.find('.modal-body');

        $('.time-entry').each(function (_, el) {
          var id = $(this).data('id');        
          $(this).click((event) => {
            var curTar = event.currentTarget;
            modal.modal();
            modal.find('.modal-title').text('Onderdelen voor ' + curTar.innerText);
            body.text('');
            var t = taken.filter((t) => t.onderdeel._id == id);
            body.append('<form>');
            t.forEach(function(entry) {
              if (user.tasks.indexOf(entry._id) == -1) {
                body.append('<input type="checkbox", id="' + entry._id + '"> ' + entry.titel + '<br>')
              } else {
                body.append('<input type="checkbox", id="' + entry._id + '", checked> ' + entry.titel + '<br>')
              }
            });
            body.append('</form>');
          });
        });

        modal.find('#opslaan-btn').click((event2) => {
          var tasksChecked = body.find('input:checked')
          for (var i=0; i < tasksChecked.length; i++) {
            if (user.tasks.indexOf(tasksChecked[i].id) == -1) {
              user.tasks.push(tasksChecked[i].id)
            }
          }

          var tasksUnchecked = body.find('input:not(:checked)')
          for (var i=0; i < tasksUnchecked.length; i++) {
            var taskIndex = user.tasks.indexOf(tasksUnchecked[i].id) 
            if (taskIndex != -1) {
              user.tasks.splice(taskIndex, 1)
            }
          }
          console.log(user.tasks)
          modal.modal('hide')

          console.log(userID)
          var stringJSON2 = JSON.stringify(user)
          $httpInit.put('/api/bondsleden/' + userID , stringJSON2)
            .then(successCallback, errorCallback);

        });
      });
    }
  }

  function validateEmail(email) {
  // var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var re = /[a-z0-9]+[_a-z0-9\.-]*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/i
  return re.test(email);
  }

  function successCallback (response) {
    console.log(response)
  }

  function errorCallback (response) {
    console.log(response)
  }

  angular.module('paalsheetApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
