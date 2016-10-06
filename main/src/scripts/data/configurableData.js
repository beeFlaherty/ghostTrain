(function() {
	'use strict';

	module.exports = {
		'music': {
			'none': {
				'name': 'None'
			},
			'creepymusicbox': {
				'name': 'Creepy Music Box',
				'mp3': '/assets/music/creepy.mp3'
			},
			'mountainking': {
				'name': 'Hall of the Mountain King',
				'mp3': '/assets/music/mountainking.mp3'
			}
		},
		'themes': {
			'castle': {
				'name': 'Castle',
				'colour': '#808080',
				'texture': '/assets/textures/castle.jpg'
			},
			'hotel': {
				'name': 'Hotel',
				'colour': '#007F46',
				'texture': '/assets/textures/hotel.jpg'
			},
			'graveyard': {
				'name': 'Graveyard',
				'colour': '#682900',
				'texture': '/assets/textures/graveyard.jpg'
			}
		},
		'light': {
			'style':
				{
					'normal': {
						'name': 'Normal',
						'light_1': '#fff',
						'light_2': '#fff',
						'light_3': '#fff'
					},
					'neon': {
						'name': 'Neon Disco',
						'light_1': '#a106db',
						'light_2': '#160dc6',
						'light_3': '#F00'
					},
					'candlelight': {
						'name': 'Candlelight',
						'light_1': '#fff',
						'light_2': '#fbf813',
						'light_3': '#fff'
					},
					'moonlight': {
						'name': 'Moonlight',
						'light_1': '#fff',
						'light_2': '',
						'light_3': '#fff'
					},
					'nuclear': {
						'name': 'Nuclear Apocolypse',
						'light_1': '#0F0',
						'light_2': '#fbf813',
						'light_3': '#0F0'
					},
					'redalert': {
						'name': 'Red Alert',
						'light_1': '#F00',
						'light_2': '',
						'light_3': '#F00'
					},
					'basement': {
						'name': 'Haunted Basement',
						'light_1': '#160dc6',
						'light_2': '#0F0',
						'light_3': '#160dc6'
					},
					'crypt': {
						'name': 'Crypt',
						'light_1': '#acacac',
						'light_2': '#acacac',
						'light_3': '#acacac'
					}
				},
			// 'color': {
			// 	'red': {
			// 		'name': 'Red',
			// 		'hex': '#F00'
			// 	},
			// 	'purple': {
			// 		'name': 'Purple',
			// 		'hex': '#a106db'
			// 	},
			// 	'blue': {
			// 		'name': 'Blue',
			// 		'hex': '#160dc6'
			// 	},
			// 	'green': {
			// 		'name': 'Green',
			// 		'hex': '#0F0'
			// 	},
			// 	'white': {
			// 		'name': 'White',
			// 		'hex': '#fff'
			// 	},
			// 	'yellow': {
			// 		'name': 'Yellow',
			// 		'hex': '#fbf813'
			// 	}
			// }
		},
		'monsters': {
			'zombie': {
				'name': 'Zombie',
				'model': '/assets/monsters/monster-zombie.obj'
			},
			'ghost': {
				'name': 'Ghost',
				'model': '/assets/monsters/monster-ghost.obj'
			},
			'vampire': {
				'name': 'Vampire',
				'model': '/assets/monsters/monster-vampire.obj'
			}
		},
		'sounds': {
			'zombie': {
				'name': 'Zombie',
				'mp3': '/assets/sounds/zombie.mp3'
			},
			'scream': {
				'name': 'Scream',
				'mp3': '/assets/sounds/scream.mp3'
			},
			'cackle': {
				'name': 'Cackle',
				'mp3': '/assets/sounds/cackle.mp3'
			}
		},
		'animations': {
			'popup': {
				'name': 'Pop-up'
			},
			'dropdown': {
				'name': 'Drop-down'
			},
			'fromleft': {
				'name': 'From-left'
			},
			'fromright': {
				'name': 'From-right'
			}
		}
	};
}());
