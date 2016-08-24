(function() {
  'use strict';


  function distanceVector(v1, v2) {
    var dx = v1.x - v2.x;
    var dy = v1.y - v2.y;
    var dz = v1.z - v2.z;

    return Math.sqrt(dx * dx + dy * dy + dz * dz);

    // .distanceTo( v ) ?
  }


  module.exports = function(userData, systemData, configurableData) {

    function distanceVector(v1, v2) {
      var dx = v1.x - v2.x;
      var dy = v1.y - v2.y;
      var dz = v1.z - v2.z;

      return Math.sqrt(dx * dx + dy * dy + dz * dz);

      // .distanceTo( v ) ?
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

    AFRAME.registerComponent('kart', {
      schema: {},
      init: function() {
        this.element = this.el.object3D;
        this.closeEnoughDistance = 0.015;
        this.first = false;
        this.trackPosition = 0;


        var trackElements = document.querySelectorAll('a-entity[track]');
        var track = [];
        var position;

        //get all track elements- build a list and sort them to create a track
        for (var i = 0; i < trackElements.length; i++) {
          position = trackElements[i].getAttribute("position");
          track.push({
            order: parseInt(trackElements[i].getAttribute("order")),
            position: new THREE.Vector3(position.x, position.y, position.z),
            duration:  parseInt(trackElements[i].getAttribute("duration"))
          });
        }

        track.sort(compareOrder);
        this.track = track;

        this.startTime = new Date();
        this.timeSinceStart = 0;
        this.startPosition = this.element.position.clone();
        this.endPosition = this.track[this.trackPosition].position.clone();
        this.percentComplete = 0;
        this.duration = 10;

      },
      tick: function(time) {
        this.distance = distanceVector(this.element.position, this.endPosition);

        if (this.distance > this.closeEnoughDistance) {
          if (!this.first) {
            this.startTime = new Date();
            this.first = true;
          }

          this.timeSinceStart = (new Date() - this.startTime) / 1000;
          this.percentComplete = this.timeSinceStart / this.duration;
          this.element.position.lerpVectors(this.startPosition, this.endPosition, this.percentComplete);

        } else {
          if (this.trackPosition + 1 < this.track.length) {
            this.trackPosition++;

            this.startTime = new Date();
            this.timeSinceStart = 0;
            this.startPosition = this.element.position.clone();
            this.endPosition = this.track[this.trackPosition].position.clone();
            this.percentComplete = 0;
            this.duration = this.track[this.trackPosition].duration;
          }
        }
      }
    });

    AFRAME.registerComponent('collider', {
      schema: {},

      init: function() {
        this.el.sceneEl.addBehavior(this);
      },

      tick: function() {
        var scene = this.el.sceneEl.object3D;
        scene.updateMatrixWorld();

        function getGlobalPosition(obj) {
          var vector = new THREE.Vector3();
          vector.setFromMatrixPosition(obj.matrixWorld);

          return vector;
        }

        function distanceVector(v1, v2) {
          var dx = v1.x - v2.x;
          var dy = v1.y - v2.y;
          var dz = v1.z - v2.z;

          return Math.sqrt(dx * dx + dy * dy + dz * dz);

          // .distanceTo( v ) ?
        }

        var thisPosition = getGlobalPosition(this.el.object3D);
        var others = document.querySelectorAll('a-obj-model[collidable]');

        others.forEach(function(other) {
          var otherPosition = getGlobalPosition(other.object3D);
          var distance = distanceVector(thisPosition, otherPosition);

          if (distance < systemData.monster.triggerDistance && !other.is('hit')) {
            other.addState('hit');
            other.emit('hit');
            other.setAttribute('visible', 'true');
          }
        });
      }
    });

    var RoomComponent = Vue.extend({
      template: '#room_template',
      props: ['index', 'room']
    });
    Vue.component('gt-room', RoomComponent);

    var ScareComponent = Vue.extend({
      template: '#scare_template',
      props: ['index', 'monster', 'sound', 'animation', 'pos'],
      methods: {
        getPosition: function(index) {
          return (this.$root.system.room.height * 0.5) - // Offset from center of room
            (
              (this.$root.system.room.height / (this.$root.system.monster.perroom + 1)) * (index + 1)
            );
        }
      }
    });
    Vue.component('gt-scare', ScareComponent);

    var AnimationComponent = Vue.extend({
      template: '#animation_template',
      props: ['type']
    });
    Vue.component('gt-animation', AnimationComponent);

    var LightComponent = Vue.extend({
      template: '#light_template',
      props: ['type']
    });
    Vue.component('gt-light', LightComponent);

    var ride = new Vue({
      el: '#ride_output',
      template: '#ride_template',
      data: {
        user: userData,
        system: systemData,
        configurable: configurableData
      }
    });
  };
}());
