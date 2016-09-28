(function() {
  'use strict';

  module.exports = function(AFRAME) {
    function distanceVector(v1, v2) {
      var dx = v1.x - v2.x;
      var dy = v1.y - v2.y;
      var dz = v1.z - v2.z;

      return Math.sqrt(dx * dx + dy * dy + dz * dz);

      // .distanceTo( v ) ?
    }

    function getGlobalPosition(obj) {
      var vector = new THREE.Vector3();
      vector.setFromMatrixPosition(obj.matrixWorld);

      return vector;
    }

    AFRAME.registerComponent('collider', {
      schema: {},

      init: function() {
        this.el.sceneEl.addBehavior(this);
        this.others = document.querySelectorAll('a-obj-model[collidable]');
      },

      tick: function() {
        var scene = this.el.sceneEl.object3D;
        scene.updateMatrixWorld();

        var thisPosition = getGlobalPosition(this.el.object3D);

        this.others.forEach(function(other) {
          var otherPosition = getGlobalPosition(other.object3D);
          var distance = distanceVector(thisPosition, otherPosition);
          var triggerDistance = other.getAttribute('collidable');

          if (distance < triggerDistance &&
            !other.is('hit')) {
            other.addState('hit');
            other.emit('hit');
            other.setAttribute('visible', 'true');
          }
        });
      }
    });
  };
}());