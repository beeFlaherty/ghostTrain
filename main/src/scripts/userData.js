(function() {
	'use strict';

	module.exports = {
		'trainsettings': {
			'music':'none',
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
						'position': '18 0 -8.5'
					},
					// {
					// 	'monster': 'mummy', // none, zombie, mummy, vampire, skeleton
					// 	'sound': 'cackle', // moan, scream, snarl, manic laughter
					// 	'animation': 'fromright' // popup, dropdown, fromleft, fromright
					// }
				]
			}//,
			// {
			// 	'theme': 'forest', // castle, forest, graveyard
			// 	'light': 'flickering', // dark, bright, flickering, glowing, red, green, purple
			// 	'scares': [
			// 		{
			// 			'monster': 'none', // none, zombie, mummy, vampire, skeleton
			// 			'sound': '', // moan, scream, snarl, manic laughter
			// 			'animation': '' // popup, dropdown, fromleft, fromright
			// 		},
			// 		{
			// 			'monster': 'vampire', // none, zombie, mummy, vampire, skeleton
			// 			'sound': 'scream', // moan, scream, snarl, manic laughter
			// 			'animation': 'dropdown' // popup, dropdown, fromleft, fromright
			// 		}
			// 	]
			// },
			// {
			// 	'theme': 'castle', // castle, forest, graveyard
			// 	'light': 'bright', // dark, bright, flickering, glowing, red, green, purple
			// 	'scares': [
			// 		{
			// 			'monster': 'none', // none, zombie, mummy, vampire, skeleton
			// 			'sound': '', // moan, scream, snarl, manic laughter
			// 			'animation': '' // popup, dropdown, fromleft, fromright
			// 		},
			// 		{
			// 			'monster': 'skeleton', // none, zombie, mummy, vampire, skeleton
			// 			'sound': 'cackle', // moan, scream, snarl, manic laughter
			// 			'animation': 'dropdown' // popup, dropdown, fromleft, fromright
			// 		}
			// 	]
			// }
		]
	};
}());
