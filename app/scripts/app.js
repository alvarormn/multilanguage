'use strict';

/**
* @ngdoc overview
* @name videoTrainersApp
* @description
* # videoTrainersApp
*
* Main module of the application.
*/
angular
.module('videoTrainersApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'pascalprecht.translate'
])
.config(function ($routeProvider, $locationProvider, $translateProvider) {
  $locationProvider
  .html5Mode(true);
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  })
  .otherwise({
    redirectTo: '/'
  });

  $translateProvider
    .translations('en', {
      TITLE: 'Welcome!',
      MESSAGE: 'This app supports your lanaguage!'
    })
    .translations('es', {
      TITLE: 'Bienvenido!',
      MESSAGE: 'Esta app soportara tu lengua'
    });
  $translateProvider.useSanitizeValueStrategy(null);  
  $translateProvider.preferredLanguage('en');

});
