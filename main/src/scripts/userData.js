(function() {
	'use strict';

	module.exports = {
		'trainsettings': {
			'music':'aa',
			'name':'train name'
		},
		'rooms': [ // This will go soon
			{'monster':'ma', 'sound':'sa', 'position':'pa', 'colour': '#F00', 'light': 'static'},
			{'monster':'ma', 'sound':'sa', 'position':'pa', 'colour': '#0F0', 'light': 'glow'},
			{'monster':'ma', 'sound':'sa', 'position':'pa', 'colour': '#00F', 'light': 'static'},
			{'monster':'ma', 'sound':'sa', 'position':'pa', 'colour': '#FF0', 'light': 'flicker'},
			{'monster':'ma', 'sound':'sa', 'position':'pa', 'colour': '#0FF', 'light': 'static'}
		],
		'new_rooms': [ // This is the final format
			{
				'theme': '', // castle, forest, graveyard
				'lighting': '', // dark, light, flickering, glowing, red, green, purple
				'scares': [
					{
						'monster': '', // none, zombie, mummy, vampire, skeleton
						'sound': '', // moan, scream, snarl, manic laughter
						'animation': '' // pop-up, drop-down, slide-left, slide-right
					},
					{
						'monster': '', // none, zombie, mummy, vampire, skeleton
						'sound': '', // moan, scream, snarl, manic laughter
						'animation': '' // pop-up, drop-down, slide-left, slide-right
					}
				]
			}
		]
	};
}());