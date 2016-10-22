(function() {
  'use strict';

    var userData = require('./data/userData');
    var systemData = require('./data/systemData');
    var configurableData = require('./data/configurableData');

    var ui = require('./ui')();
    var ride = require('./ride')();
    var api = require('./api')(Vue);

    var startScreenDelay = 3000;

    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

    var app = new Vue({
        el: '#app',
        data: {
            user: userData,
            system: systemData,
            configurable: configurableData,
            section: 'end',
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

                if (section === 'random') {

                    var _lights = [];
                    var _themes = [];
                    var _monsters = [];
                    var _music = [];

                    for (var name in this.configurable.light.style) {
                        _lights.push(name);
                    }

                    for (var name2 in this.configurable.themes) {
                        _themes.push(name2);
                    }

                    for (var name3 in this.configurable.monsters) {
                        _monsters.push(name3);
                    }

                    for (var name4 in this.configurable.music) {
                        _music.push(name4);
                    }



                    var rand;
                    rand = getRandomInt(0, _music.length);
                    this.$root.user.trainsettings.music = _music[rand];

                    for (var i = 1; i < userData.rooms.length -1; i++) {
                        rand = getRandomInt(0, _lights.length);
                        this.$root.user.rooms[i].lights.style = _lights[rand];

                        rand = getRandomInt(0, _themes.length);
                        this.$root.user.rooms[i].theme = _themes[rand];

                        for(var j = 0; j <  this.$root.user.rooms[i].scares.length; j++){
                            rand = getRandomInt(0, _monsters.length);
                            this.$root.user.rooms[i].scares[j].monster = _monsters[rand];
                        }

                    }


                    section = 'ride';
                    document.getElementsByTagName('html')[0].className += " aframe";
                }

                if (section === 'ride') {
                    document.getElementsByTagName('html')[0].className += " aframe";
                }

                if (this.section === 'form' && section === 'ride') {
                    this.saveToDatabase();
                }

                this.section = section;
              },
              mute: function(event) {
                  this.system.sound.mute = !this.user.sound;  
                  event.preventDefault();
              }

        }
    });


    app.getFromDatabase();
}());
