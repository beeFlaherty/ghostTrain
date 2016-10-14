(function() {
  'use strict';

  module.exports = function(Vue) {
    var DoorComponent = Vue.extend({
      template: '#door_template',
      props: ['position', 'rotation', 'theme', 'frame', 'door', 'triggerable', 'current', 'next']
    });
    Vue.component('gt-door', DoorComponent);
  };
}());