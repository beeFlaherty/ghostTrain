(function() {
  'use strict';

  module.exports = function(Vue) {
    var DoorComponent = Vue.extend({
      template: '#door_template',
      props: ['position', 'rotation', 'theme']
    });
    Vue.component('gt-door', DoorComponent);
  };
}());