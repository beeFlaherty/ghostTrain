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
						'animation': 'popdown'
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
			},
			{
				'position': '0 0 0',
				'lights': [
					{}
				],
				'scares': [
					{}
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
			'showPoints': false,
			'speed': 2,
			'kart': true,
			'points': [
				'6 2 4.5',
				'26 2 4.5',
				'26 2 20',
				'16 2 20',
				'34 2 20',
				'34 2 8',
				'54 2 8',
				'54 2 16',
				'46 2 16',
				'50 2 24',
				'50 2 45'
			]
		}
	};
}());
