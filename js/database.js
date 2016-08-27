var database = {

	ship : {
		1 : {
			updated:false, name:'Sidewinder', pad:1, hardpoint:[1,1], core:[2,2,2,1,1,1,1], internal:[2,2,1,1], utility:[1,1],
			mass:25,
			bulkhead:{
				1 : {name: 'Lightweight Alloy', class:8, rating:'A', cost: 0, mass: 0.0 },
				2 : {name: 'Reinforced Alloy', class:8, rating:'A', cost: 23600, mass: 2.0 },
			},
			defaults:{
				core: [12,12,12,11,11,11,31],
				internal: [112,212,311,0],
				hardpoint: [111,111],
				utility: [11,0],
			},
		},
		2 : {
			updated:false, name:'Hauler', pad:1, hardpoint:[1], core:[2,2,2,1,1,1,2], internal:[3,3,2,1], utility:[1,1],
			mass:14,
			bulkhead:{
				1 : {name: 'Lightweight Alloy', class:8, rating:'A', cost: 0, mass: 0.0 },
				2 : {name: 'Reinforced Alloy', class:8, rating:'A', cost: 42180, mass: 1.0 },
			},
			defaults:{
				core:[12,12,12,11,11,11,32],
				internal: [212,212,112,311],
				hardpoint: [111],
				utility: [0,0],
			},
		},
		3 : {
			updated:false, name:'Vulture', pad:1, hardpoint:[3,3], core:[4,5,4,3,5,4,3], internal:[5,4,2,1,1], utility:[1,1,1,1],
			mass:230,
			bulkhead:{
				1 : {name: 'Lightweight Alloy', class:8, rating:'A', cost: 0, mass: 0.0 },
				2 : {name: 'Reinforced Alloy', class:8, rating:'A', cost: 1970250, mass: 17.0 },
			},
			defaults:{
				core:[14,15,14,13,15,14,33],
				internal:[0,0,0,0,0],
				hardpoint:[111,111],
				utility: [0,0,0,0],
			},
		},
	},

	core : {
		powerplant : {
			12 : {name:'Power Plant', class:2, rating:'E', cost:1980, mass:2.5, power:6.4, heat:1.0},
			22 : {name:'Power Plant', class:2, rating:'D', cost:5930, mass:1.0, power:7.2, heat:0.8},
			32 : {name:'Power Plant', class:2, rating:'C', cost:17800, mass:1.3, power:8.0, heat:0.5},
			42 : {name:'Power Plant', class:2, rating:'B', cost:53410, mass:2.0, power:8.8, heat:0.4},
			52 : {name:'Power Plant', class:2, rating:'A', cost:160220, mass:1.3, power:9.6, heat:0.4},

			13 : {name:'Power Plant', class:3, rating:'E', cost:6270, mass:5.0, power:8.0, heat:1.0 },
			23 : {name:'Power Plant', class:3, rating:'D', cost:18810, mass:2.0, power:9.0, heat:0.8 },
			33 : {name:'Power Plant', class:3, rating:'C', cost:56440, mass:2.5, power:10.0, heat:0.5 },
			43 : {name:'Power Plant', class:3, rating:'B', cost:169300, mass:4.0, power:11.0, heat:0.4 },
			53 : {name:'Power Plant', class:3, rating:'A', cost:507910, mass:2.5, power:12.0, heat:0.4 },

			14 : {name:'Power Plant', class:4, rating:'E', cost:19880, mass:10, power:10.4, heat:1.0},
			24 : {name:'Power Plant', class:4, rating:'E', cost:19880, mass:10.0, power:10.4, heat:1.0 },
			34 : {name:'Power Plant', class:4, rating:'C', cost:178900, mass:5.0, power:13.0, heat:0.5 },
			44 : {name:'Power Plant', class:4, rating:'B', cost:536690, mass:8.0, power:14.3, heat:0.4 },
			54 : {name:'Power Plant', class:4, rating:'A', cost:1610080, mass:5.0, power:15.6, heat:0.4 },
		},
		thruster : {
			12 : {name:'Thrusters', class:2, rating:'E', cost:1980, mass:2.5, power:-2.0, optmass:24, minmul: 0.83, optmul: 1.00, maxmul: 1.03},
			22 : {name:'Thrusters', class:2, rating:'D', cost:5930, mass:1.0, power:-2.25, optmass:27, minmul: 0.86, optmul: 1.00, maxmul: 1.06},
			32 : {name:'Thrusters', class:2, rating:'C', cost:17800, mass:2.5, power:-2.5, optmass:30, minmul: 0.9, optmul: 1.00, maxmul: 1.1},
			42 : {name:'Thrusters', class:2, rating:'B', cost:53410, mass:4.0, power:-2.75, optmass:33, minmul: 0.93, optmul: 1.00, maxmul: 1.13},
			52 : {name:'Thrusters', class:2, rating:'A', cost:160220, mass:2.5, power:-3.0, optmass:36, minmul: 0.96, optmul: 1.00, maxmul: 1.16},

			13 : {name:'Thrusters', class:3, rating:'E', cost:6270, mass:5.0, power:-2.48, optmass:40, minmul: 0.83, optmul: 1.00, maxmul: 1.03},
			23 : {name:'Thrusters', class:3, rating:'D', cost:18810, mass:2.0, power:-2.79, optmass:45, minmul: 0.86, optmul: 1.00, maxmul: 1.06},
			33 : {name:'Thrusters', class:3, rating:'C', cost:56440, mass:5.0, power:-3.10, optmass:50, minmul: 0.9, optmul: 1.00, maxmul: 1.1},
			43 : {name:'Thrusters', class:3, rating:'B', cost:169300, mass:8.0, power:-3.41, optmass:55, minmul: 0.93, optmul: 1.00, maxmul: 1.13},
			53 : {name:'Thrusters', class:3, rating:'A', cost:507910, mass:5.0, power:-3.72, optmass:60, minmul: 0.96, optmul: 1.00, maxmul: 1.16},

			14 : {name:'Thrusters', class:4, rating:'E', cost:19880, mass:10.0, power:-3.28, optmass:140, minmul: 0.83, optmul: 1.00, maxmul: 1.03},
			24 : {name:'Thrusters', class:4, rating:'D', cost:59630, mass:4.0, power:-3.69, optmass:158, minmul: 0.86, optmul: 1.00, maxmul: 1.06},
			34 : {name:'Thrusters', class:4, rating:'C', cost:178900, mass:10.0, power:-4.10, optmass:175, minmul: 0.9, optmul: 1.00, maxmul: 1.1},
			44 : {name:'Thrusters', class:4, rating:'B', cost:536690, mass:16.0, power:-4.51, optmass:193, minmul: 0.93, optmul: 1.00, maxmul: 1.13},
			54 : {name:'Thrusters', class:4, rating:'A', cost:1610080, mass:10.0, power:-4.92, optmass:210, minmul: 0.96, optmul: 1.00, maxmul: 1.16},

			15 : {name:'Thrusters', class:5, rating:'E', cost:63010, mass:20.0, power:-4.08, optmass:280, minmul: 0.83, optmul: 1.00, maxmul: 1.03},
			25 : {name:'Thrusters', class:5, rating:'D', cost:189040, mass:8.0, power:-4.59, optmass:315, minmul: 0.86, optmul: 1.00, maxmul: 1.06},
			35 : {name:'Thrusters', class:5, rating:'C', cost:567110, mass:20.0, power:-5.10, optmass:350, minmul: 0.9, optmul: 1.00, maxmul: 1.1},
			45 : {name:'Thrusters', class:5, rating:'B', cost:1701320, mass:32.0, power:-5.61, optmass:385, minmul: 0.93, optmul: 1.00, maxmul: 1.13},
			55 : {name:'Thrusters', class:5, rating:'A', cost:5103950, mass:20.0, power:-6.12, optmass:420, minmul: 0.96, optmul: 1.00, maxmul: 1.16},
		},
		fsd : {
			12 : {name:'Frame Shift Drive', class:2, rating:'E', cost:1980, mass:2.5, power:-0.16, optmass:48},
			22 : {name:'Frame Shift Drive', class:2, rating:'D', cost:5930, mass:1.0, power:-0.18, optmass:54},
			32 : {name:'Frame Shift Drive', class:2, rating:'C', cost:17800, mass:2.5, power:-0.20, optmass:60},
			42 : {name:'Frame Shift Drive', class:2, rating:'B', cost:53410, mass:4.0, power:-0.25, optmass:75},
			52 : {name:'Frame Shift Drive', class:2, rating:'A', cost:160220, mass:2.5, power:-0.30, optmass:90},

			13 : {name:'Frame Shift Drive', class:3, rating:'E', cost:6270, mass:5, power:-0.24, optmass:80},
			23 : {name:'Frame Shift Drive', class:3, rating:'D', cost:18810, mass:2.0, power:-0.27, optmass:90},
			33 : {name:'Frame Shift Drive', class:3, rating:'C', cost:56440, mass:5, power:-0.30, optmass:100},
			43 : {name:'Frame Shift Drive', class:3, rating:'B', cost:169300, mass:8.0, power:-0.38, optmass:125},
			53 : {name:'Frame Shift Drive', class:3, rating:'A', cost:507910, mass:5, power:-0.45, optmass:150},

			14 : {name:'Frame Shift Drive', class:4, rating:'E', cost:19880, mass:10, power:-0.24, optmass:280},
			24 : {name:'Frame Shift Drive', class:4, rating:'D', cost:18810, mass:2.0, power:-0.27, optmass:90},
			34 : {name:'Frame Shift Drive', class:4, rating:'C', cost:56440, mass:5, power:-0.30, optmass:100},
			44 : {name:'Frame Shift Drive', class:4, rating:'B', cost:169300, mass:8.0, power:-0.38, optmass:125},
			54 : {name:'Frame Shift Drive', class:4, rating:'A', cost:507910, mass:5, power:-0.45, optmass:150},
		},
		lifesupport : {
			11 : {name:'Life Support', class:1, rating:'E', cost:520, mass:1.3, power:-0.32, time:300},

			13 : {name:'Life Support', class:3, rating:'E', cost:4050, mass:5, power:-0.42, time:300},
		},
		distributor : {
			11 : {name:'Distributor', class:1, rating:'E', cost:520, mass:1.3, power:-0.32, wepcapacity:10, wepcharge:1.2, engcapacity:8, engcharge:0.4, syscapacity:8, syscharge:0.4},
			21 : {name:'Distributor', class:1, rating:'D', cost:1290, mass:0.5, power:-0.36, wepcapacity:11, wepcharge:1.4, engcapacity:9, engcharge:0.5, syscapacity:9, syscharge:0.5},

			15 : {name:'Distributor', class:5, rating:'E', cost:31780, mass:20, power:-0.5, wepcapacity:27, wepcharge:2.9, engcapacity:19, engcharge:1.7, syscapacity:19, syscharge:1.7},
			25 : {name:'Distributor', class:5, rating:'D', cost:79440, mass:8, power:-0.56, wepcapacity:31, wepcharge:3.2, engcapacity:22, engcharge:1.9, syscapacity:22, syscharge:1.9},
		},
		sensor : {
			11 : {name:'Sensors', class:1, rating:'E', cost:520, mass:1.3, power:-0.16, optrange:4000, maxrange:8000},

			14 : {name:'Sensors', class:4, rating:'E', cost:11350, mass:10, power:-0.27, optrange:4480, maxrange:8000},
		},
		shipfuel : {
			31 : {name:'Fuel Tank', class:1, rating:'C', cost:1000, mass:2, power:0, capacity:2},
			32 : {name:'Fuel Tank', class:2, rating:'C', cost:3750, mass:4, power:0, capacity:4},
			33 : {name:'Fuel Tank', class:3, rating:'C', cost:7060, mass:8, power:0, capacity:8},
		},
	},

	internal : {
		//shield generator
		112 : {group: 'sgen', name: 'Shield Generator', class:2, rating:'E', cost:1980, mass:2.5, power:-0.9, optmass:55 },
		122 : {group: 'sgen', name: 'Shield Generator', class:2, rating:'D', cost:5930, mass:1.0, power:-1.2, optmass:55 },

		115 : {group: 'sgen', name: 'Shield Generator', class:5, rating:'E', cost:63010, mass:20.0, power:-1.56, optmass:405 },

		//cargo rack
		211 : {group: 'rack', name: 'Cargo Rack', class:1, rating:'E', cost:1000, mass:0, power:0, cargo:2},
		212 : {group: 'rack', name: 'Cargo Rack', class:2, rating:'E', cost:3250, mass:0, power:0, cargo:4},
		213 : {group: 'rack', name: 'Cargo Rack', class:3, rating:'E', cost:10560, mass:0, power:0, cargo:8},

		//discovery scanner
		311 : {group: 'scan', name: 'Basic Discovery Scanner', class:1, rating:'E', cost:1000, mass:2.0, range: 500},
	},

	hardpoint : {
		//pulse lasers
		111 : {group: 'pulse', name: 'Pulse Laser', class:1, rating:'F', cost:1870, mass:2.0, power:-0.39, mount:'F', draw:-0.33, damage:2.0, rof:3.8, dps:7.9, ap: 20, breachdam:1.7, minbreach:0.4, maxbreach:0.8, range:3000},
		121 : {group: 'pulse', name: 'Pulse Laser', class:1, rating:'G', cost:5610, mass:2.0, power:-0.39, mount:'G', draw:-0.39, damage:1.6, rof:4.0, dps:6.2, ap: 20, breachdam:1.3, minbreach:0.4, maxbreach:0.8, range:3000},
		131 : {group: 'pulse', name: 'Pulse Laser', class:1, rating:'G', cost:22100, mass:2.0, power:-0.38, mount:'T', draw:-0.39, damage:1.2, rof:3.3, dps:6.2, ap: 20, breachdam:1, minbreach:0.4, maxbreach:0.8, range:3000},

		113 : {group: 'pulse', name: 'Pulse Laser', class:3, rating:'D', cost:59840, mass:8.0, power:-0.90, mount:'F', draw:-0.96, damage:6.0, rof:3.0, dps:18.1, ap: 52, breachdam:5.1, minbreach:0.4, maxbreach:0.8, range:3000},
		123 : {group: 'pulse', name: 'Pulse Laser', class:3, rating:'E', cost:119510, mass:8.0, power:-0.92, mount:'G', draw:-0.92, damage:4.6, rof:3.2, dps:14.8, ap: 20, breachdam:3.9, minbreach:0.4, maxbreach:0.8, range:3000},
	},

	utility : {
		11 : {group:'launcher', name: 'Chaff Launcher', class:1, rating:'I', cost:8500, mass:1.3, power:-0.2, clip:1, ammo:10}
	},

	menus : {
		'index' : ['powerplantmenu','thrustermenu','fsdmenu'],
		'powerplantmenu' : {
			name: 'Powerplants', hasheader: true, sizeIndex:[4,3,2],
			contents : [
				[{part:14,label:'4E',type:0},{part:24,label:'4D',type:0},{part:34,label:'4C',type:0},{part:44,label:'4B',type:0},{part:54,label:'4A',type:0}],
				[{part:13,label:'3E',type:0},{part:23,label:'3D',type:0},{part:33,label:'3C',type:0},{part:43,label:'3B',type:0},{part:53,label:'3A',type:0}],
				[{part:12,label:'2E',type:0},{part:22,label:'2D',type:0},{part:32,label:'2C',type:0},{part:42,label:'2B',type:0},{part:52,label:'2A',type:0}],
			],
		},
		'thrustermenu' : {
			name: 'Thrusters', hasheader: true, sizeIndex:[5,4,3,2],
			contents : [
				[{part:15,label:'5E',type:0},{part:25,label:'5D',type:0},{part:35,label:'5C',type:0},{part:45,label:'5B',type:0},{part:55,label:'5A',type:0}],
				[{part:14,label:'4E',type:0},{part:24,label:'4D',type:0},{part:34,label:'4C',type:0},{part:44,label:'4B',type:0},{part:54,label:'4A',type:0}],
				[{part:13,label:'3E',type:0},{part:23,label:'3D',type:0},{part:33,label:'3C',type:0},{part:43,label:'3B',type:0},{part:53,label:'3A',type:0}],
				[{part:12,label:'2E',type:0},{part:22,label:'2D',type:0},{part:32,label:'2C',type:0},{part:42,label:'2B',type:0},{part:52,label:'2A',type:0}],
			],
		},
		'fsdmenu' : {
			name: 'Frame Shift Drives', hasheader: true, sizeIndex:[4,3,2],
			contents : [
				[{part:14,label:'4E',type:0},{part:24,label:'4D',type:0},{part:34,label:'4C',type:0},{part:44,label:'4B',type:0},{part:54,label:'4A',type:0}],
				[{part:13,label:'3E',type:0},{part:23,label:'3D',type:0},{part:33,label:'3C',type:0},{part:43,label:'3B',type:0},{part:53,label:'3A',type:0}],
				[{part:12,label:'2E',type:0},{part:22,label:'2D',type:0},{part:32,label:'2C',type:0},{part:42,label:'2B',type:0},{part:52,label:'2A',type:0}],
			],
		},

	},
};
