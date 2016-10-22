(function() {
  'use strict';

  var userData = require('./data/userData');
  var systemData = require('./data/systemData');
  var configurableData = require('./data/configurableData');

  var ui = require('./ui')();
  var ride = require('./ride')();
  var api = require('./api')(Vue);

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
      stageCounter: 0
    },
    methods: {
      getFromDatabase: function() {
        if (window.location.hash) {
          var key = window.location.hash.replace('#', '');

          var self = this;

          api.get(key, function(data) {
            self.user = data;
            self.goto('ride');
          });
        }
      },

      saveToDatabase: function() {
          api.set(this.user, function(key) {
            window.location.hash = key;
          });
      },

      goto: function(section) {

        if(section === 'ride'){
          	document.getElementsByTagName('html')[0].className += " aframe";
        }

        if (this.section === 'form' && section === 'ride') {
          this.saveToDatabase();
        }

        this.section = section;
      },
      mute: function(event) {
          this.user.sound = !this.user.sound;
          event.preventDefault();
      }
    }
  });

  app.getFromDatabase();
}());
