(function() {
	'use strict';

	module.exports = {
		'active': false,
		'trainsettings': {
			'music':'none',
			'name':'Your spooky train name'
		},
		'rooms': [
			{
				'number': 0,
				'theme': 'hotel', // castle, forest, graveyard
				'lights': [
					{
						'style': 'bright', // dark, bright, flickering, glowing
						'color': 'white', //red, green, purple

					},
					{
						'style': 'bright', // dark, bright, flickering, glowing
						'color': 'white', //red, green, purple

					},
					{
						'style': 'bright', // dark, bright, flickering, glowing
						'color': 'white', //red, green, purple

					}
				],

				'scares': [
					{
						'monster': 'zombie', // none, zombie, mummy, vampire, skeleton
						'sound': 'zombie', // moan, scream, snarl, manic laughter
						'animation': 'dropdown' // popup, dropdown, fromleft, fromright
					},
					{
					 	'monster': 'ghost', // none, zombie, mummy, vampire, skeleton
						'sound': 'scream', // moan, scream, snarl, manic laughter
						'animation': 'fromleft' // popup, dropdown, fromleft, fromright
					}
				]
			},
			{
				'number': 1,
				'theme': 'castle', // castle, forest, graveyard
				'lights': [
					{
						'style': 'bright', // dark, bright, flickering, glowing
						'color': 'white', //red, green, purple

					},
					{
						'style': 'bright', // dark, bright, flickering, glowing
						'color': 'white', //red, green, purple

					},
					{
						'style': 'bright', // dark, bright, flickering, glowing
						'color': 'white', //red, green, purple

					}
				],

				'scares': [
					{
						'monster': 'zombie', // none, zombie, mummy, vampire, skeleton
						'sound': 'zombie', // moan, scream, snarl, manic laughter
						'animation': 'fromleft' // popup, dropdown, fromleft, fromright
					}
				]
			}
		]
	};
}());
