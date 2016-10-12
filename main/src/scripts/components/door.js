(function() {
  'use strict';

  module.exports = function(Vue) {
    var DoorComponent = Vue.extend({
      template: '#door_template',
      props: ['position', 'rotation', 'theme', 'triggerable', 'from', 'to']
    });
    Vue.component('gt-door', DoorComponent);
  };
}());