(function() {
  'use strict';

// roomswitch showonenter="room_1" hideonexit="room_0"

  module.exports = function(AFRAME) {
    AFRAME.registerComponent('roomswitch', {
      schema: {},

      init: function() {
        this.el.sceneEl.addBehavior(this);

        var showOnEnter = document.getElementById(this.el.getAttribute('showonenter'));
        var hideOnExit = document.getElementById(this.el.getAttribute('hideonexit'));

        this.el.addEventListener('enter', function (evt) {
          if (showOnEnter) {
            showOnEnter.setAttribute('visible', 'true');
          }
        });

        this.el.addEventListener('exit', function (evt) {
          if (hideOnExit) {
            hideOnExit.setAttribute('visible', 'false');
          }
        });
      },

      tick: function() {
      }
    });
  };
}());