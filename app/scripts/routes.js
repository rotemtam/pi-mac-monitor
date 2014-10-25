'use strict';
/**
 * @ngdoc overview
 * @name monitorApp:routes
 * @description
 * # routes.js
 *
 * Configure routes for use with Angular, and apply authentication security
 */
angular.module('monitorApp')

  // configure views; the authRequired parameter is used for specifying pages
  // which should only be available while logged in
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/monitor.html',
        controller: 'MonitorCtrl'
      })
      .otherwise({redirectTo: '/'});
  }]);