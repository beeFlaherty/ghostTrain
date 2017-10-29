(function() {
	'use strict';

	module.exports = {
		'music': {
			'none': {
				'name': 'None'
			},
			'theaquarium': {
				'name': 'The Aquarium',
				'mp3': '/assets/music/aquarium.mp3'
			},
			'humaninstitution': {
				'name': 'Human Institution DnB',
				'mp3': '/assets/music/humaninstitution.mp3'
			},
			'synthmadness': {
				'name': 'Synth Madness',
				'mp3': '/assets/music/synthmadness.mp3'
			},
			'creepymusicbox': {
				'name': 'Creepy Music Box',
				'mp3': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/music/creepy.mp3'
			},
			'mountainking': {
				'name': 'Hall of the Mountain King',
				'mp3': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/music/mountainking.mp3'
			},
			'dansemacabre': {
				'name': 'Danse Macabre',
				'mp3': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/music/dansemacabre.mp3'
			},
			'choirofdoom': {
				'name': 'Choir of Doom',
				'mp3': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/music/choirofdoom.mp3'
			},
			'abandonedcemetery': {
				'name': 'Abandoned Cemetery',
				'mp3': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/music/abandonedcemetery.mp3'
			}
		},
		'themes': {
			'static': {
				'name': 'Video Dungeon',
				'colour': '#808080',
				'texture': '/assets/textures/static.jpg',
				'texture_mobile': '/assets/textures_mobile/static.jpg'
			},
			'industrial': {
				'name': 'Industrial',
				'colour': '#808080',
				'texture': '/assets/textures/industrial.jpg',
				'texture_mobile': '/assets/textures_mobile/industrial.jpg'
			},
			'castle': {
				'name': 'Castle',
				'colour': '#808080',
				'texture': '/assets/textures/castle.jpg',
				'texture_mobile': '/assets/textures_mobile/castle.jpg'
			},
			'hotel': {
				'name': 'Hotel',
				'colour': '#007F46',
				'texture': '/assets/textures/hotel.jpg',
				'texture_mobile': '/assets/textures_mobile/hotel.jpg'
			},
			'graveyard': {
				'name': 'Graveyard',
				'colour': '#682900',
				'texture': '/assets/textures/graveyard.jpg',
				'texture_mobile': '/assets/textures_mobile/graveyard.jpg'
			},
			'asylum': {
				'name': 'Asylum',
				'colour': '#682900',
				'texture': '/assets/textures/asylum.jpg',
				'texture_mobile': '/assets/textures_mobile/asylum.jpg'
			},
			'hauntedhouse': {
				'name': 'Haunted House',
				'colour': '#682900',
				'texture': '/assets/textures/hauntedhouse.jpg',
				'texture_mobile': '/assets/textures_mobile/hauntedhouse.jpg'
			}
		},
		'light': {
			'style':
				{
					'lightning': {
						'name': 'Lightning',
						'light_1': '#A8FFFF',
						'light_2': '#A8FFFF',
						'light_3': '#A8FFFF'
					},
					'police': {
						'name': 'Crime Scene',
						'light_1': '#E02C2C',
						'light_2': '#001DC1',
						'light_3': '#E02C2C'
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
						'light_1': '#dfe1df',
						'light_2': '#dfe1df',
						'light_3': '#dfe1df'
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
			'clown': {
				'name': 'Clown',
				'model': '/assets/monsters/monster-clown.obj'
			},
			'devil': {
				'name': 'Devil',
				'model': '/assets/monsters/monster-devil.obj'
			},
			'zombie': {
				'name': 'Zombie',
				'model': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/monsters/monster-zombie.obj'
			},
			'ghost': {
				'name': 'Ghost',
				'model': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/monsters/monster-ghost.obj'
			},
			'vampire': {
				'name': 'Vampire',
				'model': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/monsters/monster-vampire.obj'
			},
			'pyro': {
				'name': 'Pyro',
				'model': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/monsters/monster-flame-zombie.obj'
			},
			'ballerina': {
				'name': 'Zombie Ballerina',
				'model': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/monsters/monster-ballerina.obj'
			},
			'wolf': {
				'name': 'Wolfman',
				'model': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/monsters/monster-wolf.obj'
			}
		},
		'sounds': {
			'clown': {
				'name': 'Clown',
				'mp3': '/assets/sounds/clown.mp3'
			},
			'devil': {
				'name': 'Devil',
				'mp3': '/assets/sounds/devil.mp3'
			},
			'groan': {
				'name': 'Groan',
				'mp3': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/sounds/zombie.mp3'
			},
			'scream': {
				'name': 'Scream',
				'mp3': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/sounds/scream.mp3'
			},
			'cackle': {
				'name': 'Cackle',
				'mp3': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/sounds/cackle.mp3'
			},
			'snarl': {
				'name': 'Snarl',
				'mp3': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/sounds/snarl.mp3'
			},
			'giggle': {
				'name': 'Giggle',
				'mp3': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/sounds/giggle.mp3'
			},
			'laugh': {
				'name': 'Laugh',
				'mp3': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/sounds/laugh.mp3'
			},
			'roar': {
				'name': 'Roar',
				'mp3': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/sounds/roar.mp3'
			},
			'howl': {
				'name': 'Howl',
				'mp3': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/sounds/howl.mp3'
			},
			'hiss': {
				'name': 'Hiss',
				'mp3': 'http://c315bb0c25946f178c5e-6bfcbe96a30b5412ee4e39ee394627af.r87.cf3.rackcdn.com/prod2/assets/sounds/hiss.mp3'
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
