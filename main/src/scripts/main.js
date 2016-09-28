(function() {
  'use strict';

  var userData = require('./userData');
  var systemData = require('./systemData');
  var configurableData = require('./configurableData');

  var ui = require('./ui')();
  var ride = require('./ride')();

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
          }, 3000);
        }
      }
    }
  });
}());
