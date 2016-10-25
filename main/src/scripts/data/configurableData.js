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
			},
			'dansemacabre': {
				'name': 'Danse Macabre',
				'mp3': '/assets/music/dansemacabre.mp3'
			},
			'choirofdoom': {
				'name': 'Choir of Doom',
				'mp3': '/assets/music/choirofdoom.mp3'
			},
			'abandonedcemetery': {
				'name': 'Abandoned Cemetery',
				'mp3': '/assets/music/abandonedcemetery.mp3'
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
			},
			'asylum': {
				'name': 'Asylum',
				'colour': '#682900',
				'texture': '/assets/textures/asylum.jpg'
			},
			'hauntedhouse': {
				'name': 'Haunted House',
				'colour': '#682900',
				'texture': '/assets/textures/hauntedhouse.jpg'
			}
		},
		'light': {
			'style':
				{
					'neon': {
						'name': 'Neon Disco',
						'light_1': '#a106db',
						'light_2': '#160dc6',
						'light_3': '#F00'
					},
					'candlelight': {
						'name': 'Candlelight',
						'light_1': '#fff',
						'light_2': '#fceba7',
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
						'light_1': '#161616',
						'light_2': '#161616',
						'light_3': '#161616'
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
			},
			'pyro': {
				'name': 'Pyro',
				'model': '/assets/monsters/monster-flame-zombie.obj'
			},
			'ballerina': {
				'name': 'Zombie Ballerina',
				'model': '/assets/monsters/monster-ballerina.obj'
			},
			'wolf': {
				'name': 'Wolfman',
				'model': '/assets/monsters/monster-wolf.obj'
			}
		},
		'sounds': {
			'groan': {
				'name': 'Groan',
				'mp3': '/assets/sounds/zombie.mp3'
			},
			'scream': {
				'name': 'Scream',
				'mp3': '/assets/sounds/scream.mp3'
			},
			'cackle': {
				'name': 'Cackle',
				'mp3': '/assets/sounds/cackle.mp3'
			},
			'snarl': {
				'name': 'Snarl',
				'mp3': '/assets/sounds/snarl.mp3'
			},
			'giggle': {
				'name': 'Giggle',
				'mp3': '/assets/sounds/giggle.mp3'
			},
			'laugh': {
				'name': 'Laugh',
				'mp3': '/assets/sounds/laugh.mp3'
			},
			'roar': {
				'name': 'Roar',
				'mp3': '/assets/sounds/roar.mp3'
			},
			'howl': {
				'name': 'Howl',
				'mp3': '/assets/sounds/howl.mp3'
			},
			'hiss': {
				'name': 'Hiss',
				'mp3': '/assets/sounds/hiss.mp3'
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
