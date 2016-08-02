'use strict';

import express from 'express';
import _ from 'lodash';
import fs from 'fs';
import dateformat from 'dateformat';

import Bondslid from './bondslid/bondslid.model';

var router = express.Router();

router.get('/', (req, res) => {
  Bondslid
  .find()
  .sort(req.query.sort || null)
  .populate({path: 'tasks', select: '-onderdeel'})
  .exec((err, results) => {
    if (err) {
      console.error(err)
      res.end(500)
    } else {
      const now = new Date()
      const file = './enquete-'.concat(dateformat(now, 'yyyymmdd_HHMMss')).concat('.csv')

      fs.writeFile(file, csv(['ID', 'Naam', 'E-mail', 'Taken', 'Dagen', 'Praam', 'Bonnen', 'Mentor', 'Busje', 'Balie', 'Opmerking']), err => {
        results.forEach(r => {
          fs.appendFileSync(file, csv([r._id, r.fullname, r.email, _.map(r.tasks, 'omschrijving'), r.dagen, r.praam, r.bonnen, translate_mentor(r.mentor), r.busje, r.balie, r.opmerking]))
        })

        res.status(200).download(file, err => {
          console.log(file, 'downloaded succesfully!')
          // fs.unlink(file)
        })
      })
    }
  })
})

router.get('/namen', (req, res) => {
  Bondslid
  .find()
  .sort(req.query.sort || null)
  .exec((err, results) => {
    if (err) {
      console.error(err)
      res.end(500)
    } else {
      var data = _(results)
      .map('fullname')
      .value()
      res.status(200).json(data)
    }
  })
})

router.get('/aantal', (req, res) => {
  Bondslid
  .find()
  .count()
  .exec((err, count) => {
    if (err) {
      console.error(err)
      res.end(500)
    } else {
      res.status(200).json(count)
    }
  })
})

function csv(data) {
  return _.map(data, entry => prep(String(entry).trim())).join(';').concat('\n')
}

function prep(string) {
  var new_string = ''
  for (var i in string) {
    var c = string[i]

    if (c !== '\n' && c !== '\r')
      new_string += c
    else
      new_string += ' '
  }

  return new_string
}

function translate_mentor(value) {
  switch (value) {
    case 0:
      return 'Nee'
    case 1:
      return 'Ja'
    case 2:
      return 'Ja (partner)'
    case 3:
      return 'Ja (bevestiging)'
    default:
      return ''
  }
}

module.exports = router;
