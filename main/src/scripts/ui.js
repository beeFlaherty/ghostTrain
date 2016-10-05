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
            this.$root.formPart ++;
            console.log(this.$root.formPart );
          }
        },
      });
    Vue.component('gt-form', FormComponent);

  };
}());
