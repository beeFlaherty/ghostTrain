(function() {
	'use strict';

	module.exports = {
		'sky': {
			'colour': '#000000'
		},
		'sound': {
			'chain': true
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
						'rotation': '0 90 0',
						'animation': 'fromleft'
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
						'position': '41 0 8',
						'rotation': '0 270 0',
						'animation': 'dropdown'
					}
				]
			},
			{
				'position': '0 0 0',
				'lights': [
					{
						'position': '46 2 6'
					},
					{
						'position': '50 2 14'
					},
					{
						'position': '50 2 26'
					}
				],
				'scares': [
					{
						'position': '48 0 8',
						'rotation': '0 90 0',
						'animation': 'dropdown'
					},
					{
						'position': '46 0 20',
						'rotation': '0 180 0',
						'animation': 'fromleft'
					}
				]
			},
			{
				'position': '0 0 0',
				'lights': [
					{
						'position': '51 2 30'
					},
					{
						'position': '51 2 38'
					},
					{
						'position': '51 2 46'
					}
				],
				'scares': [
					{
						'position': '50 0 32',
						'rotation': '0 180 0',
						'animation': 'fromleft'
					},
					{
						'position': '49 0 42',
						'rotation': '0 180 0',
						'animation': 'fromright'
					},
					{
						'position': '49 0 54',
						'rotation': '0 180 0',
						'animation': 'popup'
					}
				]
			},
			{
				'position': '0 0 0',
				'lights': [
					{}
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
			'showPoints': true,
			'speed': 2,
			'kart': true,
			'points': [
				'6 3.5 4.5',
				'26 3.5 4.5',
				'26 3.5 20',
				'16 3.5 20',
				'34 3.5 20',
				'34 3.5 8',
				'54 3.5 8',
				'54 3.5 16',
				'46 3.5 16',
				'46 3.5 24',
				'50 3.5 24',
				'50 3.5 56'
			]
		}
	};
}());
