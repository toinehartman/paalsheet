/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import Bondslid from '../api/bondslid/bondslid.model';
import Onderdeel from '../api/onderdeel/onderdeel.model';
import Taak from '../api/taak/taak.model';

Bondslid.find({}).remove()
  .then(() => Onderdeel.find({}).remove())
  .then(() => Taak.find({}).remove())
  .then(() => Onderdeel.create({
    titel: 'Campusparade/BBQ',
    omschrijving: 'Fissa',
    start: new Date(2016, 7, 21, 17, 0),
    eind: new Date(2016, 7, 21, 19, 0)
  }, {
    titel: 'Openingsfeest',
    omschrijving: 'Meer fissa',
    start: new Date(2016, 7, 21, 20, 0),
    eind: new Date(2016, 7, 22, 0, 0)
  }, {
    titel: 'Infomarkt',
    omschrijving: 'Markt',
    start: new Date(2016, 7, 22, 16, 15),
    eind: new Date(2016, 7, 22, 17, 0)
  }, {
    titel: 'Bierestafette',
    omschrijving: 'Lekker bav adten',
    start: new Date(2016, 7, 22, 17, 0),
    eind: new Date(2016, 7, 22, 18, 30)
  }, {
    titel: 'Nobelprijzen',
    omschrijving: 'Kansloze drankspelletjes onder adellijke begeleiding',
    start: new Date(2016, 7, 22, 18, 30),
    eind: new Date(2016, 7, 22, 21, 30)
  }, {
    titel: 'Stock Exchange',
    omschrijving: 'SEx maandag',
    start: new Date(2016, 7, 22, 21, 30),
    eind: new Date(2016, 7, 22, 22, 30)
  }, {
    titel: 'De Klittenband',
    omschrijving: 'Bandje!',
    start: new Date(2016, 7, 22, 22, 30),
    eind: new Date(2016, 7, 23, 0, 0)
  }, {
    titel: 'DJ PJ Neon Party',
    omschrijving: 'Deze man!',
    start: new Date(2016, 7, 22, 0, 0),
    eind: new Date(2016, 7, 23, 3, 0)
  }, {
    titel: 'Verenigingendag',
    omschrijving: 'Rondleidingen enzo',
    start: new Date(2016, 7, 23, 16, 15),
    eind: new Date(2016, 7, 23, 17, 0)
  }, {
    titel: 'In Vino Casino',
    omschrijving: 'Wijn en dingen',
    start: new Date(2016, 7, 23, 17, 0),
    eind: new Date(2016, 7, 23, 20, 0)
  }, {
    titel: 'Pullen voor Nullen',
    omschrijving: 'Pulletjes!',
    start: new Date(2016, 7, 23, 20, 0),
    eind: new Date(2016, 7, 23, 22, 30)
  }, {
    titel: 'Partners \'n Shine + FeestDJRuud',
    omschrijving: 'Fissa!',
    start: new Date(2016, 7, 23, 22, 30),
    eind: new Date(2016, 7, 24, 1, 0)
  }, {
    titel: 'DJ Paul',
    omschrijving: 'Fissa!',
    start: new Date(2016, 7, 23, 1, 0),
    eind: new Date(2016, 7, 24, 3, 0)
  }, {
    titel: 'SpoCudag',
    omschrijving: 'Sportief dagje',
    start: new Date(2016, 7, 24, 16, 15),
    eind: new Date(2016, 7, 24, 17, 0)
  }, {
    titel: 'Spelroulette/Hamburgers met korting',
    omschrijving: 'Allemaal leuke dingen',
    start: new Date(2016, 7, 24, 17, 0),
    eind: new Date(2016, 7, 24, 19, 0)
  }, {
    titel: 'Pré-ZomBiFest',
    omschrijving: 'Roel!',
    start: new Date(2016, 7, 24, 19, 0),
    eind: new Date(2016, 7, 24, 21, 30)
  }, {
    titel: 'Stock Exchange',
    omschrijving: 'SEx woensdag',
    start: new Date(2016, 7, 24, 21, 30),
    eind: new Date(2016, 7, 24, 22, 30)
  }, {
    titel: 'Oranje Boeven',
    omschrijving: 'Bandje!',
    start: new Date(2016, 7, 24, 22, 30),
    eind: new Date(2016, 7, 24, 23, 0)
  }, {
    titel: 'Vele Anderen',
    omschrijving: 'Nog meer fissa!',
    start: new Date(2016, 7, 24, 0, 0),
    eind: new Date(2016, 7, 25, 3, 0)
  }, {
    titel: 'Smoothie-/koffiebar',
    omschrijving: 'Lekkere gezonde sappies',
    start: new Date(2016, 7, 25, 17, 0),
    eind: new Date(2016, 7, 25, 18, 0)
  }, {
    titel: 'Escape Room',
    omschrijving: 'Vette puzzels in het pand',
    start: new Date(2016, 7, 25, 18, 0),
    eind: new Date(2016, 7, 25, 20, 0)
  }, {
    titel: 'Brak & Beautiful',
    omschrijving: 'Meer bandje!',
    start: new Date(2016, 7, 25, 20, 0),
    eind: new Date(2016, 7, 25, 22, 0)
  }, {
    titel: 'Woody B',
    omschrijving: 'DJ!',
    start: new Date(2016, 7, 25, 22, 0),
    eind: new Date(2016, 7, 26, 0, 0)
  }, {
    titel: 'Ledenbekendmaking!',
    omschrijving: 'Feest!',
    start: new Date(2016, 7, 25, 0, 0),
    eind: new Date(2016, 7, 26, 0, 30)
  }, {
    titel: 'Slotfeest met MC Menno\'s Eskalation',
    omschrijving:' Eskalatie!',
    start: new Date(2016, 7, 25, 0, 30),
    eind: new Date(2016, 7, 26, 3, 0)
  }))

  .then(() => Onderdeel.findOne({
    titel: 'Bierestafette'
  }).then((estafette, err1) => {
    if (err1) console.log('Onderdeel niet gevonden: ' + err1);

    Taak.create({
      titel: 'Opbouwen',
      omschrijving: 'Opbouwen Bierestafette',
      onderdeel: estafette._id
    })
    .then((taak, err2) => {
      if (err2) console.log('Taak niet gecreëerd: ' + err2);

      estafette.taken.push(taak._id)
    })
    .then(() => Taak.create({
      titel: 'Afbouwen',
      omschrijving: 'Afbouwen Bierestafette',
      onderdeel: estafette._id
    })
    .then((taak, err2) => {
      if (err2) console.log('Taak niet gecreëerd: ' + err2);

      estafette.taken.push(taak._id)
      estafette.save()
    }))
  }))

  .then(() => Onderdeel.findOne({
    titel: 'Nobelprijzen'
  }).then((nobelprijzen, err1) => {
    if (err1) console.log('Onderdeel niet gevonden: ' + err1);

    Taak.create({
      titel: 'Begeleiden',
      omschrijving: 'Begeleiden Nobelprijzen',
      onderdeel: nobelprijzen._id
    })
    .then((taak, err2) => {
      if (err2) console.log('Taak niet gecreëerd: ' + err2);

      nobelprijzen.taken.push(taak._id)
      nobelprijzen.save()
    })
  }))
