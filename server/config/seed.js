/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Bondslid from '../api/bondslid/bondslid.model';

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
