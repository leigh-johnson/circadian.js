require('angular');
require('angular-route')
require('angular-ui-bootstrap');

// 
var setCoords = function($rootScope){
  navigator.geolocation.getCurrentPosition(function(position){
    $rootScope.cords = {lat: position.coords.latitude, long: position.coords.longitude };
    return
  });
};
var PreviewService = require('./services/PreviewService');
var PreviewController = require('./controllers/PreviewController');

var previewApp = angular.module('previewApp', ['ngRoute','ui.bootstrap'])
  .service('PreviewService', PreviewService)
  .controller('PreviewCtrl', ['$scope', '$rootScope', '$location', 'PreviewService', PreviewController]);

