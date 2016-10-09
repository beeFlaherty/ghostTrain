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
						'position': '4 3 -3'
					},
					{
						'position': '4 3 -23.5',
					},
					{
						'position': '17 3 -22',
					}
				],
				'scares': [
					{
						'position': '3 0 -16',
						'rotation': '0 0 0',
						'animation': 'fromright'
					},
					{
						'position': '20 0 -22',
						'rotation': '0 90 0',
						'animation': 'fromleft'
					}
				]
			},
			{
				'position': '24 0 -16',
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
			'scale': 0.9
		},
		'animation': {
			'duration': 2000,
			'repeat': 0
		},
		'track': {
			'showPoints': false,
			'speed': 2,
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