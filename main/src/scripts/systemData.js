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
				'lights': [{
					//positions
				}]
			},
			{
				'lights': [{

				}]
			}
		],
		'monster': {
			'width': 1,
			'height': 0.1,
			'perroom': 2,
			'triggerDistance': 8
		},
		'animation': {
			'duration': 2000,
			'repeat': 0
		},
		'track': {
			'showPoints': false,
			'speed': 3,
			'points': [
				'17 4 0',
				'18 4 -5',
				'20 4 -5',
				'22 4 -8',
				'17 4 -14',
				'17 4 -18',
				'17 4 -22',
				'26 4 -22'
			]
		}
	};
}());