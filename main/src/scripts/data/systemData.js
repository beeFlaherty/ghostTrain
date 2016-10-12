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
						'position': '5 3 8'
					},
					{
						'position': '5 3 0',
					},
					{
						'position': '5 3 -16',
					}
				],
				'scares': [
					{
						'position': '4 0 13',
						'rotation': '0 0 0',
						'animation': 'popup'
					}
				]
			}


		],
		'monster': {
			'width': 1,
			'height': 0.1,
			'perroom': 2,
			'triggerDistance': 8,
			'scale': 0.75
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
				'4 4 0',
				'4 4 -20',
				'28 4 -20',
				'28 4 -6',
				'28 4 -28',
				'28 4 -50',
			]
		}
	};
}());
