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
				'theme': 'castle', // castle, forest, graveyard
				'lights': [
					{
						'style': 'bright', // dark, bright, flickering, glowing
						'color': 'red', //red, green, purple

					},
					{
						'style': 'bright', // dark, bright, flickering, glowing
						'color': 'purple', //red, green, purple

					},
					{
						'style': 'flickering', // dark, bright, flickering, glowing
						'color': 'green', //red, green, purple

					},
					{
						'style': 'flickering', // dark, bright, flickering, glowing
						'color': 'purple', //red, green, purple
					}
				],

				'scares': [
					{
						'monster': 'zombie', // none, zombie, mummy, vampire, skeleton
						'sound': 'zombie', // moan, scream, snarl, manic laughter
						'animation': 'fromleft', // popup, dropdown, fromleft, fromright
						'position': '18 0 -8.5',
						'rotation': '0 0 0'
					},
					// {
					// 	'monster': 'mummy', // none, zombie, mummy, vampire, skeleton
					// 	'sound': 'cackle', // moan, scream, snarl, manic laughter
					// 	'animation': 'fromright' // popup, dropdown, fromleft, fromright
					// }
				]
			},
			{
				'number': 1,
				'theme': 'forest', // castle, forest, graveyard
				'light': 'bright', // dark, bright, flickering, glowing, red, green, purple
				'lightcolor': 'purple',
				'scares': [
					{
						'monster': 'zombie', // none, zombie, mummy, vampire, skeleton
						'sound': 'zombie', // moan, scream, snarl, manic laughter
						'animation': 'dropdown', // popup, dropdown, fromleft, fromright
						'position': '28 0 -2',
						'rotation': '0 270 0'
					},
				]
			}
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
