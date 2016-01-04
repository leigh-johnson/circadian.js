var $ = require('jquery');
window.jQuery = $;
var _ = require('lodash');
window._ = _
console.log(_)
require('bootstrap');
require('angular');
require('angular-route')
require('angular-ui-bootstrap');
require('angular-google-maps');
require('angular-simple-logger');


var PreviewService = require('./services/PreviewService');
var PreviewController = require('./controllers/PreviewController');

// The preview app is a small demonstration for the intro page
var previewApp = angular.module('previewApp', ['ngRoute','ui.bootstrap', 'uiGmapgoogle-maps'])
  .service('PreviewService', PreviewService)
  .controller('PreviewCtrl', ['$scope', '$rootScope', '$location', 'PreviewService', PreviewController]);


// Example 01 using Three.js
//var Example01Service = require('./services/Example01Service');
//var Example01Controller = require('./controllers/Example01Controller');

//var example01App = angular.module('example01App', ['ngRoute', 'ui.bootstrap', 'uiGmapgoogle-maps'])