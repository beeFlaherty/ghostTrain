(function() {
  'use strict';

  module.exports = function(systemData, userData) {
console.log('AAAA', userData);
    var userDataContainer = new Vue({
      el: '#settings',
      data: userData,
      methods: {
        activate: function(event) {
          userData.active = true;
          console.log('BBBB', userData);
          event.preventDefault();
        }
      },
      ready: function() {
      }

    });
  };

}());
