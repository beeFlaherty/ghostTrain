(function() {
	'use strict';

	module.exports = {
		'trainsettings': {
			'music':'aa',
			'name':'train name'
		},
		'rooms': [
			{
				'theme': 'castle', // castle, forest, graveyard
				'light': 'bright', // dark, bright, flickering, glowing, red, green, purple
				'scares': [
					{
						'monster': 'zombie', // none, zombie, mummy, vampire, skeleton
						'sound': 'zombie', // moan, scream, snarl, manic laughter
						'animation': 'popup' // popup, dropdown, fromleft, fromright
					},
					{
						'monster': 'mummy', // none, zombie, mummy, vampire, skeleton
						'sound': 'cackle', // moan, scream, snarl, manic laughter
						'animation': 'fromright' // popup, dropdown, fromleft, fromright
					}
				]
			},
			{
				'theme': 'forest', // castle, forest, graveyard
				'light': 'flickering', // dark, bright, flickering, glowing, red, green, purple
				'scares': [
					{
						'monster': 'none', // none, zombie, mummy, vampire, skeleton
						'sound': '', // moan, scream, snarl, manic laughter
						'animation': '' // popup, dropdown, fromleft, fromright
					},
					{
						'monster': 'vampire', // none, zombie, mummy, vampire, skeleton
						'sound': 'scream', // moan, scream, snarl, manic laughter
						'animation': 'dropdown' // popup, dropdown, fromleft, fromright
					}
				]
			},
			{
				'theme': 'graveyard', // castle, forest, graveyard
				'light': 'bright', // dark, bright, flickering, glowing, red, green, purple
				'scares': [
					{
						'monster': 'none', // none, zombie, mummy, vampire, skeleton
						'sound': '', // moan, scream, snarl, manic laughter
						'animation': '' // popup, dropdown, fromleft, fromright
					},
					{
						'monster': 'skeleton', // none, zombie, mummy, vampire, skeleton
						'sound': 'cackle', // moan, scream, snarl, manic laughter
						'animation': 'dropdown' // popup, dropdown, fromleft, fromright
					}
				]
			}
		]
	};
}());