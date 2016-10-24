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
				'editable': 'false',
				'theme': 'hotel', // castle, forest, graveyard
				'lights': {
					'style' : 'basement'
				},

				'scares': [

				]
			},
			{
				'number': 1,
				'editable': 'true',
				'theme': 'hauntedhouse', // castle, forest, graveyard
				'lights': {
					'style' : 'moonlight'
				},

				'scares': [
					{
						'monster': 'pyro', // none, zombie, mummy, vampire, skeleton
						'sound': 'groan', // moan, scream, snarl, manic laughter
						'animation': 'fromleft' // popup, dropdown, fromleft, fromright
					},
					{
						'monster': 'ballerina', // none, zombie, mummy, vampire, skeleton
						'sound': 'scream', // moan, scream, snarl, manic laughter
						'animation': 'fromleft' // popup, dropdown, fromleft, fromright
					}
				]
			},
			{
				'number': 2,
				'editable': 'true',
				'theme': 'asylum', // castle, forest, graveyard
				'lights': {
					'style' : 'candlelight'
				},

				'scares': [
					{
						'monster': 'zombie', // none, zombie, mummy, vampire, skeleton
						'sound': 'groan', // moan, scream, snarl, manic laughter
						'animation': 'fromleft' // popup, dropdown, fromleft, fromright
					},
					{
						'monster': 'zombie', // none, zombie, mummy, vampire, skeleton
						'sound': 'groan', // moan, scream, snarl, manic laughter
						'animation': 'fromleft' // popup, dropdown, fromleft, fromright
					},
					{
						'monster': 'zombie', // none, zombie, mummy, vampire, skeleton
						'sound': 'groan', // moan, scream, snarl, manic laughter
						'animation': 'fromleft' // popup, dropdown, fromleft, fromright
					}
				]
			},
			{
				'number': 3,
				'editable': 'true',
				'theme': 'castle', // castle, forest, graveyard
				'lights': {
					'style' : 'crypt'
				},

				'scares': [
					{
						'monster': 'zombie', // none, zombie, mummy, vampire, skeleton
						'sound': 'groan', // moan, scream, snarl, manic laughter
						'animation': 'fromleft' // popup, dropdown, fromleft, fromright
					},
					{
						'monster': 'zombie', // none, zombie, mummy, vampire, skeleton
						'sound': 'groan', // moan, scream, snarl, manic laughter
						'animation': 'fromleft' // popup, dropdown, fromleft, fromright
					}
				]
			},
			{
				'number': 4,
				'editable': 'true',
				'theme': 'castle', // castle, forest, graveyard
				'lights': {
					'style' : 'crypt'
				},

				'scares': [
					{
						'monster': 'zombie', // none, zombie, mummy, vampire, skeleton
						'sound': 'groan', // moan, scream, snarl, manic laughter
						'animation': 'fromleft' // popup, dropdown, fromleft, fromright
					},
					{
						'monster': 'zombie', // none, zombie, mummy, vampire, skeleton
						'sound': 'groan', // moan, scream, snarl, manic laughter
						'animation': 'fromleft' // popup, dropdown, fromleft, fromright
					},
					{
						'monster': 'zombie', // none, zombie, mummy, vampire, skeleton
						'sound': 'groan', // moan, scream, snarl, manic laughter
						'animation': 'fromleft' // popup, dropdown, fromleft, fromright
					}
				]
			},
			{
				'number': 5,
				'editable': false,
				'theme': 'castle', // castle, forest, graveyard
				'lights': {
					'style' : 'moonlight'
				},

				'scares': [

				]
			}
		]
	};
}());
