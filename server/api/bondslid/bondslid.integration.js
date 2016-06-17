'use strict';

var app = require('../..');
import request from 'supertest';

var newBondslid;

describe('Bondslid API:', function() {

  describe('GET /api/bondsleden', function() {
    var bondslids;

    beforeEach(function(done) {
      request(app)
        .get('/api/bondsleden')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          bondslids = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(bondslids).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/bondsleden', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/bondsleden')
        .send({
          name: 'New Bondslid',
          info: 'This is the brand new bondslid!!!'
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
      expect(newBondslid.name).to.equal('New Bondslid');
      expect(newBondslid.info).to.equal('This is the brand new bondslid!!!');
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
      expect(bondslid.name).to.equal('New Bondslid');
      expect(bondslid.info).to.equal('This is the brand new bondslid!!!');
    });

  });

  describe('PUT /api/bondsleden/:id', function() {
    var updatedBondslid;

    beforeEach(function(done) {
      request(app)
        .put('/api/bondsleden/' + newBondslid._id)
        .send({
          name: 'Updated Bondslid',
          info: 'This is the updated bondslid!!!'
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
      expect(updatedBondslid.name).to.equal('Updated Bondslid');
      expect(updatedBondslid.info).to.equal('This is the updated bondslid!!!');
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
