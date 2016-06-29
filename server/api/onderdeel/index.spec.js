'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var onderdeelCtrlStub = {
  index: 'onderdeelCtrl.index',
  show: 'onderdeelCtrl.show',
  create: 'onderdeelCtrl.create',
  update: 'onderdeelCtrl.update',
  destroy: 'onderdeelCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var onderdeelIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './onderdeel.controller': onderdeelCtrlStub
});

describe('Onderdeel API Router:', function() {

  it('should return an express router instance', function() {
    expect(onderdeelIndex).to.equal(routerStub);
  });

  describe('GET /api/onderdelen', function() {

    it('should route to onderdeel.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'onderdeelCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/onderdelen/:id', function() {

    it('should route to onderdeel.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'onderdeelCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/onderdelen', function() {

    it('should route to onderdeel.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'onderdeelCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/onderdelen/:id', function() {

    it('should route to onderdeel.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'onderdeelCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/onderdelen/:id', function() {

    it('should route to onderdeel.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'onderdeelCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/onderdelen/:id', function() {

    it('should route to onderdeel.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'onderdeelCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
