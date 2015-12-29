require('angular');
require('angular-route')
require('angular-ui-bootstrap');


var PreviewService = require('./services/PreviewService');
var PreviewController = require('./controllers/PreviewController');

var previewApp = angular.module('previewApp', ['ngRoute', 'ui.bootstrap'])
  .service('PreviewService', PreviewService)
  .controller('PreviewCtrl', ['$scope', '$rootScope', 'PreviewService', PreviewController]);

// get lat/long coords

var getCoords = function(){
  console.log('fired')
  navigator.geolocation.getCurrentPosition(function(position){
    console.log('/' + 'lat=' + position.coords.latitude + '&long=' + position.coords.longitude)
    return '/' + 'lat=' + position.coords.latitude + '&long=' + position.coords.longitude
  });
};
previewApp.config(['$routeProvider', 
  function($routeProvider){
    $routeProvider.when('/', {
      redirectTo: getCoords()
    }).otherwise({
      reloadOnSearch: true
    });
}]);