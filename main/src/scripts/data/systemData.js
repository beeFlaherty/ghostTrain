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
						'position': '18 3 -5'
					},
					{
						'position': '18 3 -22',
					},
					{
						'position': '30 3 -22',
					}
				],
				'scares': [
					{
						'position': '18 0 -10',
						'rotation': '0 0 0'
					},
					{
						'position': '30 0 -22',
						'rotation': '0 90 0'
					}
				]
			},
			{
				'position': '24 0 -18',
				'lights': [
					{
						'position': '18 3 0'
					},
					{
						'position': '18 3 -22',
					},
					{
						'position': '32 3 -22',
					}
				],
				'scares': [
					{
						'position': '18 0 -16',
						'rotation': '0 0 0'
					}
				]
			},
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
			'speed': 3,
			'points': [
				'18 4 0',
				'18 4 -20',
				'40 4 -20',
				'40 4 -38',
				'50 4 -38',
			]
		}
	};
}());