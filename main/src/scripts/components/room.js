(function() {
  'use strict';

  module.exports = function(Vue) {
    Vue.partial('room0-partial', document.getElementById('room0-partial').innerHTML);
    Vue.partial('room1-partial', document.getElementById('room1-partial').innerHTML);
    Vue.partial('room2-partial', document.getElementById('room2-partial').innerHTML);
    Vue.partial('room3-partial', document.getElementById('room3-partial').innerHTML);


    var RoomComponent =
      Vue.extend({
        template: '#room_template',
        props: ['index', 'room', 'position', 'theme']
      });
    Vue.component('gt-room', RoomComponent);
  };
}());
