'use strict';

/**
 * @ngdoc function
 * @name monitorApp.controller:MonitorCtrl
 * @description
 * # MonitorCtrl
 * Controller of the monitorApp
 */
angular.module('monitorApp')
  .controller('MonitorCtrl', function ($scope, fbutil, $timeout) {

  	$scope.stations = fbutil.syncArray('stations', {limit: 15});

    // display any errors
    $scope.stations.$loaded().catch(alert);

    
  });
