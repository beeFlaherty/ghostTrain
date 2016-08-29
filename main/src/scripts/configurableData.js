(function() {
	'use strict';

	module.exports = {
		'music': {
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
				'textures': {
					'floor': '',
					'walls': '',
					'roof': ''
				}
			},
			'forest': {
				'name': 'Forest',
				'colour': '#007F46',
				'textures': {
					'floor': '',
					'walls': '',
					'roof': ''
				}
			},
			'graveyard': {
				'name': 'Graveyard',
				'colour': '#682900',
				'textures': {
					'floor': '',
					'walls': '',
					'roof': ''
				}
			}
		},
		'light': {
			'dark': {
				'name': 'Dark'
			},
			'bright': {
				'name': 'Bright'
			},
			'flickering': {
				'name': 'Flickering'
			},
			'glowing': {
				'name': 'Glowing'
			}
		},
		'monsters': {
			'zombie': {
				'name': 'Zombie',
				'colour': '#0F0',
				'model': '/assets/monsters/zombie.obj',
				'texture': '/assets/monsters/zombie.png'
			},
			'mummy': {
				'name': 'Mummy',
				'colour': '#F00',
				'model': '/assets/monsters/zombie.obj',
				'texture': '/assets/monsters/zombie.png'
			},
			'vampire': {
				'name': 'Vampire',
				'colour': '#000',
				'model': '/assets/monsters/zombie.obj',
				'texture': '/assets/monsters/zombie.png'
			},
			'skeleton': {
				'name': 'Skeleton',
				'colour': '#FFF',
				'model': '/assets/monsters/zombie.obj',
				'texture': '/assets/monsters/zombie.png'
			},
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