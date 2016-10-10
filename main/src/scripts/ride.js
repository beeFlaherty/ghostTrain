(function() {
  'use strict';

  module.exports = function() {
    require('./aframe/kart')(AFRAME);
    require('./aframe/collider')(AFRAME);
    require('./aframe/roomswitch')(AFRAME);

    require('./components/room')(Vue);
    require('./components/scare')(Vue);
    require('./components/light')(Vue);
    require('./components/animation')(Vue);
    require('./components/ride')(Vue);
  };
}());
