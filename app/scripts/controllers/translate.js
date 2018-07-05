'use strict';

/**
 * @ngdoc function
 * @name videoTrainersApp.controller:TranslateCtrl
 * @description
 * # TranslateCtrl
 * Controller of the videoTrainersApp
 */
angular.module('videoTrainersApp')
  .controller('TranslateCtrl', function ($translate) {

    var ctrl = this;

    ctrl.languages = ['en', 'es'];
    ctrl.updateLanguage = function() {
      $translate.use(ctrl.language);
    };

  });
