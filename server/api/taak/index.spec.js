'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var taakCtrlStub = {
  index: 'taakCtrl.index',
  show: 'taakCtrl.show',
  create: 'taakCtrl.create',
  update: 'taakCtrl.update',
  destroy: 'taakCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var taakIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './taak.controller': taakCtrlStub
});

describe('Taak API Router:', function() {

  it('should return an express router instance', function() {
    expect(taakIndex).to.equal(routerStub);
  });

  describe('GET /api/taken', function() {

    it('should route to taak.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'taakCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/taken/:id', function() {

    it('should route to taak.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'taakCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/taken', function() {

    it('should route to taak.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'taakCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/taken/:id', function() {

    it('should route to taak.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'taakCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/taken/:id', function() {

    it('should route to taak.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'taakCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/taken/:id', function() {

    it('should route to taak.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'taakCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
