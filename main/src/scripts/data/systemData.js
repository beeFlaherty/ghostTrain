(function() {
	'use strict';

	module.exports = {
		'highquality': false,
		'currentroom': 0,
		'sky': {
			'colour': '#000000'
		},
		'sound': {
			'chain': true,
			'mute': false
		},
		'rooms': [
			{
				'position': '0 0 0',
				'lights': [
					{
						'position': '5 3 3'
					}
				],
				'scares': [
					{}
				]
			},
			{
				'position': '0 0 0',
				'lights': [
					{
						'position': '16 2 3.5'
					},
					{
						'position': '26 2 3.5',
					},
					{
						'position': '26 1 16',
					}
				],
				'scares': [
					{
						'position': '18 0 5',
						'rotation': '0 270 0',
						'animation': 'fromright'
					},
					{
						'position': '26 0 13',
						'rotation': '0 180 0',
						'animation': 'popup'
					}
				]
			},
			{
				'position': '0 0 0',
				'lights': [
					{
						'position': '20 2 20'
					},
					{
						'position': '30 2 20',
					},
					{
						'position': '38 3 8',
					}
				],
				'scares': [
					{
						'position': '15 0 20',
						'rotation': '0 90 0',
						'animation': 'popup'
					},
					{
						'position': '33 0 20.5',
						'rotation': '0 270 0',
						'animation': 'fromright'
					},
					{
						'position': '34 0 5',
						'rotation': '0 0 0',
						'animation': 'popup'
					}
				]
			},
			// {
			// 	'position': '0 0 0',
			// 	'lights': [
			// 		{
			// 			'position': '46 2 6'
			// 		},
			// 		{
			// 			'position': '50 2 14'
			// 		},
			// 		{
			// 			'position': '50 2 26'
			// 		}
			// 	],
			// 	'scares': [
			// 		{
			// 			'position': '48 0 8',
			// 			'rotation': '0 270 0',
			// 			'animation': 'dropdown'
			// 		},
			// 		{
			// 			'position': '47 0 20',
			// 			'rotation': '0 180 0',
			// 			'animation': 'fromleft'
			// 		}
			// 	]
			// },
			{
				'position': '0 0 0',
				'lights': [
					{
						'position': '48 2 8'
					},
					{
						'position': '54 2 8'
					},
					{
						'position': '58 2 8'
					}
				],
				'scares': [
					{
						'position': '49 0 8',
						'rotation': '0 270 0',
						'animation': 'fromleft'
					},
					{
						'position': '58 0 10',
						'rotation': '0 270 0',
						'animation': 'fromright'
					},
					{
						'position': '70 0 9',
						'rotation': '0 270 0',
						'animation': 'popup'
					}
				]
			},
			{
				'position': '0 0 0',
				'lights': [
					{
						position: '80 2 8'
					}
				],
				'scares': [
					{}
				]
			}


		],
		'monster': {
			'width': 1,
			'height': 0.1,
			'perroom': 2,
			'triggerDistance': 6,
			'scale': 0.5
		},
		'door': {
			'triggerDistance': 5
		},
		'animation': {
			'duration': 2000,
			'repeat': 0
		},
		'track': {
			'showPoints': false,
			'speed': 1.5,
			'kart': true,
			'points': [
				{ 'position':'7 3.5 4', 'duration':'5', 'rotationDuration':'-1', 'allowMovement':'false' },

				{ 'position':'26 3.5 4', 'duration':'-1', 'rotationDuration':'-1' },
				{ 'position':'26 3.5 5', 'duration':'3', 'rotationDuration':'-1', 'allowMovement':'false' },

				{ 'position':'26 3.5 20', 'duration':'-1', 'rotationDuration':'-1'},
				{ 'position':'25 3.5 20', 'duration':'3', 'rotationDuration':'-1', 'allowMovement':'false'},

				{ 'position':'16 3.5 20', 'duration':'-1', 'rotationDuration':'-1'},
				{ 'position':'17 3.5 20', 'duration':'3', 'rotationDuration':'-1', 'allowMovement':'false'},

				{ 'position':'34 3.5 20', 'duration':'-1', 'rotationDuration':'-1'},
				{ 'position':'34 3.5 19', 'duration':'3', 'rotationDuration':'-1', 'allowMovement':'false'},


				{ 'position':'34 3.5 8', 'duration':'-1', 'rotationDuration':'-1'},
				{ 'position':'35 3.5 8', 'duration':'3', 'rotationDuration':'-1', 'allowMovement':'false'},

				{ 'position':'79 3.5 8', 'duration':'-1', 'rotationDuration':'-1'},
				{ 'position':'79.5 3.5 8', 'duration':'5', 'rotationDuration':'-1', 'allowMovement':'false'}
			]
		}
	};
}());
