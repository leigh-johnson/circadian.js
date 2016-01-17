var $ = require('jquery');
window.jQuery = $;
var _ = require('lodash');
window._ = _
require('bootstrap');
require('angular');
require('angular-route')
require('angular-ui-bootstrap');
require('angular-google-maps');
require('angular-simple-logger');


var LocationService = require('./services/LocationService');
var LocationController = require('./controllers/LocationController');

// The preview app is a small demonstration for the intro page
var previewApp = angular.module('locationApp', ['ngRoute','ui.bootstrap', 'uiGmapgoogle-maps'])
  .service('LocationService', LocationService)
  .controller('LocationCtrl', ['$scope', '$rootScope', '$location', 'LocationService', LocationController]);

// Example 01 using Three.js
//var Example01Service = require('./services/Example01Service');
//var Example01Controller = require('./controllers/Example01Controller');

//var example01App = angular.module('example01App', ['ngRoute', 'ui.bootstrap'])