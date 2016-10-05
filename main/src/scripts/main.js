(function() {
  'use strict';

  var userData = require('./data/userData');
  var systemData = require('./data/systemData');
  var configurableData = require('./data/configurableData');

  var ui = require('./ui')();
  var ride = require('./ride')();

  var startScreenDelay = 3000;

  var app = new Vue({
    el: '#app',
    data: {
      user: userData,
      system: systemData,
      configurable: configurableData,
      section: 'start',
      formPart: 0,
      roomPart: 'theme',
      stageCounter:1
    },

    methods: {
      gotoForm: function() {
          var self = this;
            self.section = 'form';

      }
    }
  });
}());
