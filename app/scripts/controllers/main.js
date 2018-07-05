'use strict';

/**
 * @ngdoc function
 * @name videoTrainersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videoTrainersApp
 */
angular.module('videoTrainersApp')
  .controller('MainCtrl', function ($translate) {
    var ctrl = this;

    ctrl.languages = ['en', 'es'];
    ctrl.updateLanguage = function() {
      $translate.use(ctrl.language);
    };
  });
