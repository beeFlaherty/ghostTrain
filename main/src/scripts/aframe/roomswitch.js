(function() {
  'use strict';

// roomswitch data-showonenter="room_1" data-hideonexit="room_0"

  module.exports = function(AFRAME) {
    AFRAME.registerComponent('roomswitch', {
      schema: {},

      init: function() {
        this.el.sceneEl.addBehavior(this);

        var showOnEnter = document.getElementById(this.el.getAttribute('data-showonenter'));
        var hideOnExit = document.getElementById(this.el.getAttribute('data-hideonexit'));

        this.el.addEventListener('enter', function (evt) {
          showOnEnter.setAttribute('visible', 'true');
        });

        this.el.addEventListener('exit', function (evt) {
          hideOnExit.setAttribute('visible', 'false');
        });
      },

      tick: function() {
      }
    });
  };
}());