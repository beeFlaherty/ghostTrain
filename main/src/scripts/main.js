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
      section: 'form'
    },
    created: function() {
      this.pauseOnStartScreen();
    },
    methods: {
      pauseOnStartScreen: function() {
        if (this.section === 'start') {
          var self = this;

          setTimeout(function() {
            self.section = 'form';
          }, startScreenDelay);
        }
      }
    }
  });
}());
