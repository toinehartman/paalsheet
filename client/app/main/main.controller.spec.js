'use strict';

describe('Component: mainComponent', function() {

  // load the controller's module
  beforeEach(module('paalsheetApp'));

  var scope;
  var mainComponent;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/bondsleden')
      .respond(['Arie', 'Bart', 'Carel', 'Demi']);

    scope = $rootScope.$new();
    mainComponent = $componentController('main', {
      $http: $http,
      $scope: scope
    });
  }));

  it('should attach a list of bondsleden to the controller', function() {
    mainComponent.$onInit();
    $httpBackend.flush();
    expect(mainComponent.bondsleden.length)
      .to.equal(4);
  });
});
