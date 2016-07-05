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
  .then(() => Bondslid.create({
    firstname: 'Sanne',
    lastname: 'van Alebeek',
    email: 'slfvanalebeek@weetikhet.nl'
  }, {
    firstname: 'Krista',
    lastname: 'Meijerman',
    email: 'meijermann@weetikhet.nl'
  }, {
    firstname: 'Toine',
    lastname: 'Hartman',
    email: 'penning@meester.nl'
  }, {
    firstname: 'Nico',
    lastname: 'de Korte',
    email: 'bobdebouwer@gamma.nl'
  }, {
    firstname: 'Vianne',
    lastname: 'Heusdens',
    email: 'knippenplakkenlijmen@io.nl'
  }, {
    firstname: 'Balty',
    lastname: 'Intern',
    email: 'inteeeeeern@dsb.nl'
  }, {
    firstname: 'Matthijs',
    lastname: 'Verzijl',
    email: 'marcm@langenaam.nl'
  }))
  .then(() => Onderdeel.create({
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
    titel: 'OGD Stock Exchange',
    omschrijving: 'Goedkoop bier',
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
    eind: new Date(2016, 7, 22, 3, 0)
  }, {
    titel: 'DJ PJ Neon Party 2',
    omschrijving: 'Deze man!',
    start: new Date(2016, 7, 22, 1, 0),
    eind: new Date(2016, 7, 22, 3, 0)
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
