'use strict';

var app = require('../..');
import request from 'supertest';

var newTaak;

describe('Taak API:', function() {

  describe('GET /api/taken', function() {
    var taken;

    beforeEach(function(done) {
      request(app)
        .get('/api/taken')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          taken = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(taken).to.be.instanceOf(Array);
    });

  });

  // describe('POST /api/taken', function() {
  //   beforeEach(function(done) {
  //     request(app)
  //       .post('/api/taken')
  //       .send({
  //         titel: 'Opbouwen',
  //         omschrijving: 'Opbouwen Stock Exchange maandag',
  //         onderdeel: null
  //       })
  //       .expect(201)
  //       .expect('Content-Type', /json/)
  //       .end((err, res) => {
  //         if (err) {
  //           return done(err);
  //         }
  //         newTaak = res.body;
  //         done();
  //       });
  //   });

  //   it('should respond with the newly created taak', function() {
  //     expect(newTaak.titel).to.equal('Opbouwen');
  //     expect(newTaak.omschrijving).to.equal('Opbouwen Stock Exchange maandag');
  //     expect(newTaak.onderdeel).to.equal(null);
  //   });

  // });

  // describe('GET /api/taken/:id', function() {
  //   var taak;

  //   beforeEach(function(done) {
  //     request(app)
  //       .get('/api/taken/' + newTaak._id)
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .end((err, res) => {
  //         if (err) {
  //           return done(err);
  //         }
  //         taak = res.body;
  //         done();
  //       });
  //   });

  //   afterEach(function() {
  //     taak = {};
  //   });

  //   it('should respond with the requested taak', function() {
  //     expect(newTaak.titel).to.equal('Opbouwen');
  //     expect(newTaak.omschrijving).to.equal('Opbouwen Stock Exchange maandag');
  //     expect(newTaak.onderdeel).to.equal(null);
  //   });

  // });

  // describe('PUT /api/taken/:id', function() {
  //   var updatedTaak;

  //   beforeEach(function(done) {
  //     request(app)
  //       .put('/api/taken/' + newTaak._id)
  //       .send({
  //         titel: 'Afbouwen',
  //         omschrijving: 'Afbouwen Stock Exchange woensdag',
  //         onderdeel: null
  //       })
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .end(function(err, res) {
  //         if (err) {
  //           return done(err);
  //         }
  //         updatedTaak = res.body;
  //         done();
  //       });
  //   });

  //   afterEach(function() {
  //     updatedTaak = {};
  //   });

  //   it('should respond with the updated taak', function() {
  //     expect(updatedTaak.titel).to.equal('Afbouwen');
  //     expect(updatedTaak.omschrijving).to.equal('Afbouwen Stock Exchange woensdag');
  //     expect(updatedTaak.onderdeel).to.equal(null);
  //   });

  // });

  // describe('DELETE /api/taken/:id', function() {

  //   it('should respond with 204 on successful removal', function(done) {
  //     request(app)
  //       .delete('/api/taken/' + newTaak._id)
  //       .expect(204)
  //       .end((err, res) => {
  //         if (err) {
  //           return done(err);
  //         }
  //         done();
  //       });
  //   });

  //   it('should respond with 404 when taak does not exist', function(done) {
  //     request(app)
  //       .delete('/api/taken/' + newTaak._id)
  //       .expect(404)
  //       .end((err, res) => {
  //         if (err) {
  //           return done(err);
  //         }
  //         done();
  //       });
  //   });

  // });

});
