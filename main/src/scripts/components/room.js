(function() {
  'use strict';

  module.exports = function(Vue) {
    Vue.partial('room0-partial', document.getElementById('room0-partial').innerHTML);
    Vue.partial('room1-partial', document.getElementById('room1-partial').innerHTML);

    var RoomComponent =
      Vue.extend({
        template: '#room_template',
        props: ['index', 'room', 'position', 'theme']
      });
    Vue.component('gt-room', RoomComponent);
  };
}());