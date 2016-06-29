'use strict';

var app = require('../..');
import request from 'supertest';

var newOnderdeel;

describe('Onderdeel API:', function() {

  describe('GET /api/onderdelen', function() {
    var onderdelen;

    beforeEach(function(done) {
      request(app)
        .get('/api/onderdelen')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          onderdelen = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(onderdelen).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/onderdelen', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/onderdelen')
        .send({
          titel: 'Stock Exchange',
          omschrijving: 'Gratis bier!',
          start: new Date(2016, 7, 22, 21, 0),
          eind: new Date(2016, 7, 22, 22, 0)
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newOnderdeel = res.body;
          done();
        });
    });

    it('should respond with the newly created onderdeel', function() {
      expect(newOnderdeel.titel).to.equal('Stock Exchange');
      expect(newOnderdeel.omschrijving).to.equal('Gratis bier!');
      expect(newOnderdeel.taken).to.be.instanceOf(Array);
    });

  });

  describe('GET /api/onderdelen/:id', function() {
    var onderdeel;

    beforeEach(function(done) {
      request(app)
        .get('/api/onderdelen/' + newOnderdeel._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          onderdeel = res.body;
          done();
        });
    });

    afterEach(function() {
      onderdeel = {};
    });

    it('should respond with the requested onderdeel', function() {
      expect(onderdeel.titel).to.equal('Stock Exchange');
      expect(onderdeel.omschrijving).to.equal('Gratis bier!');
      expect(onderdeel.taken).to.be.instanceOf(Array);
    });

  });

  describe('PUT /api/onderdelen/:id', function() {
    var updatedOnderdeel;

    beforeEach(function(done) {
      request(app)
        .put('/api/onderdelen/' + newOnderdeel._id)
        .send({
          titel: 'DJ PJ',
          omschrijving: 'Wat een baas, die man!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedOnderdeel = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedOnderdeel = {};
    });

    it('should respond with the updated onderdeel', function() {
      expect(updatedOnderdeel.titel).to.equal('DJ PJ');
      expect(updatedOnderdeel.omschrijving).to.equal('Wat een baas, die man!');
      expect(updatedOnderdeel.taken).to.be.instanceOf(Array);
    });

  });

  describe('DELETE /api/onderdelen/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/onderdelen/' + newOnderdeel._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when onderdeel does not exist', function(done) {
      request(app)
        .delete('/api/onderdelen/' + newOnderdeel._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
