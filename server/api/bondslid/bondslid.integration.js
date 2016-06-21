'use strict';

var app = require('../..');
import request from 'supertest';

var newBondslid;

describe('Bondslid API:', function() {

  describe('GET /api/bondsleden', function() {
    var bondsleden;

    beforeEach(function(done) {
      request(app)
        .get('/api/bondsleden')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          bondsleden = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(bondsleden).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/bondsleden', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/bondsleden')
        .send({
          firstname: 'Jan',
          lastname: 'Bondslid',
          email: 'jan@dsb.nl'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newBondslid = res.body;
          done();
        });
    });

    it('should respond with the newly created bondslid', function() {
      expect(newBondslid.firstname).to.equal('Jan');
      expect(newBondslid.lastname).to.equal('Bondslid');
      expect(newBondslid.email).to.equal('jan@dsb.nl');
    });

  });

  describe('GET /api/bondsleden/:id', function() {
    var bondslid;

    beforeEach(function(done) {
      request(app)
        .get('/api/bondsleden/' + newBondslid._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          bondslid = res.body;
          done();
        });
    });

    afterEach(function() {
      bondslid = {};
    });

    it('should respond with the requested bondslid', function() {
      expect(newBondslid.firstname).to.equal('Jan');
      expect(newBondslid.lastname).to.equal('Bondslid');
      expect(newBondslid.email).to.equal('jan@dsb.nl');
    });

  });

  describe('PUT /api/bondsleden/:id', function() {
    var updatedBondslid;

    beforeEach(function(done) {
      request(app)
        .put('/api/bondsleden/' + newBondslid._id)
        .send({
          firstname: 'Ernst',
          lastname: 'van de Zaak',
          email: 'ernst@dezaak.nl'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedBondslid = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedBondslid = {};
    });

    it('should respond with the updated bondslid', function() {
      expect(updatedBondslid.firstname).to.equal('Ernst');
      expect(updatedBondslid.lastname).to.equal('van de Zaak');
      expect(updatedBondslid.email).to.equal('ernst@dezaak.nl');
    });

  });

  describe('DELETE /api/bondsleden/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/bondsleden/' + newBondslid._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when bondslid does not exist', function(done) {
      request(app)
        .delete('/api/bondsleden/' + newBondslid._id)
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
