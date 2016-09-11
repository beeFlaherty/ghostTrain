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
      section: 'ride'
    }
  });
}());
