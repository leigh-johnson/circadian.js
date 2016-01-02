require('angular');
require('angular-route')
require('angular-ui-bootstrap');


var PreviewService = require('./services/PreviewService');
var PreviewController = require('./controllers/PreviewController');

var previewApp = angular.module('previewApp', ['ngRoute','ui.bootstrap'])
  .config(function($routeProvider, $location){
    $routeProvider.when('/', {
      redirectTo: getCoords($location)
    });
  })
  .service('PreviewService', PreviewService)
  .controller('PreviewCtrl', ['$scope', '$rootScope', 'PreviewService', PreviewController]);

// get lat/long coords

var getCoords = function($location){
  navigator.geolocation.getCurrentPosition(function(position){
    console.log('/' + 'lat=' + position.coords.latitude + '&long=' + position.coords.longitude)
    $location.search('/' + 'lat=' + position.coords.latitude + '&long=' + position.coords.longitude);
    return '/' + 'lat=' + position.coords.latitude + '&long=' + position.coords.longitude
  });
};