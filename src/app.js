'use strict';

// Imports
var angular = require('angular');
window.jQuery = window.$ = require('jquery');
require('angular-sanitize')
require('angular-route');
require('angular-marked');

// Application routing and startup
var Router  = require('./router');
var StartUp = require('./startUp');

// Application modules
require('./components/home/home');
require('./components/docs/docs');

// Injection
var app = angular.module('app', [
	'ngSanitize',
	'ngRoute',
	'hc.marked',
	'app.home',
	'app.docs'
]);

app.config(['$routeProvider', Router]);
app.run(StartUp);