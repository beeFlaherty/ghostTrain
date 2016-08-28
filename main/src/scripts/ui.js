(function() {
  'use strict';

  var userData = new Vue({
  el: '#settings',
  data: {
    'trainsettings': {
     'music':'creepymusicbox',
     'name':'train name'
   },
   'rooms': [
     {
       'number': 1,
       'theme': 'castle', // castle, forest, graveyard
       'light': 'bright', // dark, bright, flickering, glowing, red, green, purple
       'lightcolor': 'purple',
       'scares': [
         {
           'monster': 'zombie', // none, zombie, mummy, vampire, skeleton
           'sound': 'zombie', // moan, scream, snarl, manic laughter
           'animation': 'fromleft', // popup, dropdown, fromleft, fromright
           'position': "18 0 -8.5"
         },
       ]
     }
   ]
 }
});

}());
