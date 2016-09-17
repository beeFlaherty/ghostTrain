(function() {
  'use strict';

  module.exports = function() {
    function lerp(a, b, f) {
      return (a * (1 - f)) + (b * f);
    }

    function compareOrder(a, b) {
      if (a.order < b.order) {
        return -1;
      } else if (a.order > b.order) {
        return 1;
      } else {
        return 0;
      }
    }

    function distanceVector(v1, v2) {
      var dx = v1.x - v2.x;
      var dy = v1.y - v2.y;
      var dz = v1.z - v2.z;

      return Math.sqrt(dx * dx + dy * dy + dz * dz);

      // .distanceTo( v ) ?
    }

    // Converts from degrees to radians.
    Math.radians = function(degrees) {
      return degrees * Math.PI / 180;
    };

    // Converts from radians to degrees.
    Math.degrees = function(radians) {
      return radians * 180 / Math.PI;
    };

    AFRAME.registerComponent('kart', {
      schema: {},
      init: function() {
        this.element = this.el.object3D;
        this.rotationHelper =
          document.getElementById('rotation-helper').object3D;

        this.closeEnoughDistance = 0.1;
        this.first = false;
        this.trackPosition = 0;

        var trackElements = document.querySelectorAll('a-entity[track]');
        var track = [];
        var position;

        // get all track elements- build a list and sort them to create a track
        for (var i = 0; i < trackElements.length; i++) {
          position = trackElements[i].getAttribute("position");
          track.push({
            order: parseInt(trackElements[i].getAttribute("order")),
            position: new THREE.Vector3(position.x, position.y, position.z),
            duration: parseInt(trackElements[i].getAttribute("duration"))
          });
        }

        track.sort(compareOrder);
        this.track = track;

        this.startTime = new Date();
        this.timeSinceStart = 0;
        this.startPosition = this.element.position.clone();
        this.endPosition = this.track[this.trackPosition].position.clone();
        this.element.lookAt(this.endPosition);
        this.percentComplete = 0;
        this.speed = 1.5;
        var duration =
          distanceVector(this.startPosition, this.endPosition) / this.speed;

        this.duration = this.track[this.trackPosition].duration || duration;
        this.startRotation = this.element.rotation.clone();
        this.rotationHelper.position.set(this.element.position.x,
          this.element.position.y,
          this.element.position.z);
        this.rotationHelper.lookAt(this.endPosition);
        var value = Math.degrees(this.rotationHelper.rotation.y);

        if (value < 0) {
           value = 360 + value;
        }

        if (value > 360) {
           value = 360 - value;
        }

        value = Math.radians(value);

        this.rotation = new THREE.Vector3(0, value, 0);

      },
      tick: function(time) {
        var value;

        this.rotationHelper.position.set(this.element.position.x,
          this.element.position.y,
          this.element.position.z);
        this.distance = distanceVector(this.element.position, this.endPosition);

        if (this.distance > this.closeEnoughDistance) {
          if (!this.first) {
            this.startTime = new Date();
            this.first = true;
          }

          this.timeSinceStart = (new Date() - this.startTime) / 1000;
          this.percentComplete = this.timeSinceStart / this.duration;

          //    this.element.quaternion.slerp(this.rotation, 1);
          value = lerp(
            this.startRotation.y, this.rotation.y,
            (this.percentComplete * 3) > 1 ? 1 : this.percentComplete * 3);

          value = Math.degrees(value);

          if (value < 0) {
             value = 360 + value;
          }

          if (value > 360) {
             value = 360 - value;
          }

          value = Math.radians(value);
          this.element.rotation.set(0, value, 0);

          this.element.position.lerpVectors(
            this.startPosition, this.endPosition, this.percentComplete);

        } else {
          if (this.trackPosition + 1 < this.track.length) {
            this.trackPosition++;
            this.startRotation = this.element.rotation.clone();
            this.startTime = new Date();
            this.timeSinceStart = 0;
            this.startPosition = this.element.position.clone();
            this.endPosition = this.track[this.trackPosition].position.clone();
            this.percentComplete = 0;
            var duration =
              distanceVector(this.startPosition, this.endPosition) /
              this.speed;

            this.duration = this.track[this.trackPosition].duration || duration;
            this.rotationHelper.lookAt(this.endPosition.clone());

            value = Math.degrees(this.rotationHelper.rotation.y);

            if (value < 0) {
               value = 360 + value;
            }

            if (value > 360) {
               value = 360 - value;
            }

            value = Math.radians(value);

            this.rotation = new THREE.Vector3(0, value, 0);
          } else {
            if (!this.el.is('finished')) {
              this.el.addState('finished');
              this.el.emit('finished');
            }
          }
        }
      }
    });
  };
}());