(function() {
  'use strict';

  module.exports = function() {


    var FormComponent =
      Vue.extend({
        template: '#form_template',
        props: ['user', 'system', 'configurable'],
        methods: {
          activate: function(event) {
            this.$root.goto('ride');
            event.preventDefault();
          },
          next: function(event){
            event.preventDefault();
            if (this.$root.formPart > 1){
              if (this.$root.roomPart == "theme") {
                this.$root.roomPart = "lights";
              }else if (this.$root.roomPart == "lights") {
                this.$root.roomPart = "scare";
              } else if (this.$root.roomPart == "scare") {
                this.$root.roomPart = "theme";
                this.$root.formPart ++;
                this.$root.stageCounter++;
              }

            }else {
            this.$root.formPart ++;
			if (this.$root.formPart == 1){
				this.$root.formPart ++;
				this.$root.stageCounter++;
			}
            }
          }
        },
      });
    Vue.component('gt-form', FormComponent);

  };
}());
