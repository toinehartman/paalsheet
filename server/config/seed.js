/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Bondslid from '../api/bondslid/bondslid.model';
import Onderdeel from '../api/onderdeel/onderdeel.model';

Bondslid.find({}).remove()
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

Onderdeel.find({}).remove()
  .then(() => Onderdeel.create({
    titel: 'Bierestafette',
    omschrijving: 'Lekker bav adten',
    start: new Date(2016, 8, 22, 17, 0, 0, 0),
    eind: new Date(2016, 8, 22, 18, 30, 0, 0),
    taken: [{
      titel: 'Opbouwen'
    }, {
      titel: 'Afbouwen'
    }]
  }, {
    titel: 'Nobelprijzen',
    omschrijving: 'Kansloze drankspelletjes onder adellijke begeleiding',
    start: new Date(2016, 8, 22, 18, 30, 0, 0),
    eind: new Date(2016, 8, 22, 21, 30, 0, 0),
    taken: [{
      titel: 'Opbouwen'
    }, {
      titel: 'Afbouwen'
    }]
  }))
