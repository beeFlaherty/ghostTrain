(function() {
  'use strict';

  // roomswitch showonenter="room_1" hideonexit="room_0"
  function removeChildrens(element, delay){
    var children;
    element = $(element);
    if(element.children().length > 0){
      children = element.children();

      for(var i =0; i < children.length; i++){
        if (!$(children[i]).hasClass('door')) {
          delay = removeChildrens(children[i], delay);
          removeElement(children[i], delay * 100);
        }
      }
    }

    delay++;
    return delay;
  }

  function removeElement(child, delay){
    setTimeout(function(){
      $(child).remove();
    },delay);
  }

  module.exports = function(AFRAME) {
    AFRAME.registerComponent('roomswitch', {
      schema: {},

      init: function() {
        this.el.sceneEl.addBehavior(this);

        var showOnEnter = document.getElementById(this.el.getAttribute('showonenter'));
        var roomNumber = parseInt((this.el.getAttribute('showonenter') + '').replace(/\D/g, ''));
        var hideOnExit = document.getElementById(this.el.getAttribute('hideonexit'));

        this.el.addEventListener('enter', function (evt) {
          if (showOnEnter) {
            showOnEnter.__vue__.$root.system.currentroom = roomNumber;
            // showOnEnter.setAttribute('visible', 'true');
          }
        });

        this.el.addEventListener('exit', function (evt) {
          if (hideOnExit) {
            // hideOnExit.setAttribute('visible', 'false');
           removeChildrens(hideOnExit, 0);
          }
        });
      },

      tick: function() {
      }
    });
  };
}());
