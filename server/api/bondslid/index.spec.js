'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var bondslidCtrlStub = {
  index: 'bondslidCtrl.index',
  show: 'bondslidCtrl.show',
  create: 'bondslidCtrl.create',
  update: 'bondslidCtrl.update',
  destroy: 'bondslidCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var bondslidIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './bondslid.controller': bondslidCtrlStub
});

describe('Bondslid API Router:', function() {

  it('should return an express router instance', function() {
    expect(bondslidIndex).to.equal(routerStub);
  });

  describe('GET /api/bondsleden', function() {

    it('should route to bondslid.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'bondslidCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/bondsleden/:id', function() {

    it('should route to bondslid.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'bondslidCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/bondsleden', function() {

    it('should route to bondslid.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'bondslidCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/bondsleden/:id', function() {

    it('should route to bondslid.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'bondslidCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/bondsleden/:id', function() {

    it('should route to bondslid.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'bondslidCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/bondsleden/:id', function() {

    it('should route to bondslid.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'bondslidCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
