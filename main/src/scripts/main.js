(function() {
  'use strict';

    var userData = require('./data/userData');
    var systemData = require('./data/systemData');
    var configurableData = require('./data/configurableData');

    var ui = require('./ui')();
    var ride = require('./ride')();
    var api = require('./api')(Vue);
    var is = require('./detectmobile');
    var nosleep = require('./nosleep')();

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        console.log('Query variable %s not found', variable);
    }

    var app = new Vue({
        el: '#app',
        data: {
            user: userData,
            system: systemData,
            configurable: configurableData,
            section: 'disclaimer',
            formPart: 0,
            roomPart: 'theme',
            stageCounter: 0
        },
        ready: function() {
        },
		watch: {
			roomPart: function(value) {
				this.slickInit();
			},
			section: function(value) {
				if (value === 'form'){
					this.slickInit();
				}
			},
			formPart: function(value) {
				if (this.formPart == 2) {
				this.slickInit();
				}
			},
		},

        methods: {
			slickInit: function() {
				$('.carousel').slick({
  				infinite: false,
				  variableWidth: true,
  				slidesToShow: 3,
  				slidesToScroll: 1,
				responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
				});

			},
            getFromDatabase: function() {
                if (window.location.search) {
                    var key = getQueryVariable('ride');

                    var self = this;

                    api.get(key, function(data) {
                        self.$root.system.key = key;
                        self.user = data;
                        self.goto('ride');
                    });
                }
            },

            saveToDatabase: function() {
                var self = this;

                api.set(this.user, function(key) {
                    self.$root.system.key = key;
                });
            },

            goto: function(section) {
                if (section === 'start') {
                    this.system.highquality = !is.mobileAndTablet();
                    this.getFromDatabase();
                }

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

                    this.saveToDatabase();
                    section = 'ride';
                    document.getElementsByTagName('html')[0].className += " aframe";
                }

                if (section === 'ride') {
                    document.getElementsByTagName('html')[0].className += ' aframe';
                }

				if (section !== 'ride') {
					document.getElementsByTagName('html')[0].className = '';
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
}());
