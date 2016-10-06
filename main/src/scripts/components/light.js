(function() {
  'use strict';

  module.exports = function(Vue) {
    var LightComponent = Vue.extend({
      template: '#light_template',
      props: ['index', 'style', 'roomnum', 'light1', 'light2', 'light3']
    });
    Vue.component('gt-light', LightComponent);
  };
}());