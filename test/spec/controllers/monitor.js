'use strict';

describe('Controller: MonitorCtrl', function () {

  // load the controller's module
  beforeEach(module('monitorApp'));

  var MonitorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MonitorCtrl = $controller('MonitorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
