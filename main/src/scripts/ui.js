(function() {
  'use strict';

  module.exports = function(systemData, userData) {

    var userDataContainer = new Vue({
      el: '#settings',
      data: userData,
      methods: {
        activate: function(event) {
          userData.active = true;
          event.preventDefault();
        },
        next: function(event){
          event.preventDefault();
          console.log(this);
        }
      },
      ready: function() {
      }

    });
  };

}());
