(function() {
  'use strict';

  module.exports = function() {
    var FormComponent =
      Vue.extend({
        template: '#form_template',
        props: ['user', 'system', 'configurable'],
        methods: {
          activate: function(event) {
            this.$root.section = 'ride';
            event.preventDefault();
          },
          next: function(event){
            event.preventDefault();
            console.log(this);
          }
        },
      });
    Vue.component('gt-form', FormComponent);

  };
}());
