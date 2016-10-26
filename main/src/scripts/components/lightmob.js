(function() {
  'use strict';

  module.exports = function(Vue) {
    var LightMobComponent = Vue.extend({
      template: '#lightmob_template',
      props: ['index', 'light1', 'light2']
    });
    Vue.component('gt-lightmob', LightMobComponent);
  };
}());