var database = {

	ship : {
		1 : {
			updated:false, name:'Sidewinder', pad:1, hardpoint:[1,1], core:[2,2,2,1,1,1,1], internal:[2,2,1,1], utility:2,
			bulkhead:{
				1 : {name: 'Lightweight Alloy', class:8, rating:'A', cost: 0, mass: 0.0 },
				2 : {name: 'Reinforced Alloy', class:8, rating:'A', cost: 23600, mass: 2.0 },
			},
			defaults:{
				core: [12,12,12,11,11,11,31],
				internal: [112,212,311,0],
			},
		},
		2 : {
			updated:false, name:'Hauler', pad:1, hardpoint:[1], core:[2,2,2,1,1,1,2], internal:[3,3,2,1], utility:2,
			bulkhead:{
				1 : {name: 'Lightweight Alloy', class:8, rating:'A', cost: 0, mass: 0.0 },
				2 : {name: 'Reinforced Alloy', class:8, rating:'A', cost: 42180, mass: 1.0 },
			},
			defaults:{
				core:[12,12,12,11,11,11,32],
				internal: [212,212,112,311],
			},
		},
		3 : {
			updated:false, name:'Vulture', pad:1, hardpoint:[3,3], core:[4,5,4,3,5,4,3], internal:[5,4,2,1,1], utility:2,
			bulkhead:{
				1 : {name: 'Lightweight Alloy', class:8, rating:'A', cost: 0, mass: 0.0 },
				2 : {name: 'Reinforced Alloy', class:8, rating:'A', cost: 1970250, mass: 17.0 },
			},
			defaults:{
				core:[14,15,14,13,15,14,33],
				internal:[0,0,0,0,0],
			},
		},
	},

	core : {
		powerplant : {
			12 : {name:'Power Plant', class:2, rating:'E', cost:1980, mass:2.5, power:6.4, heat:1.0},
			22 : {name:'Power Plant', class:2, rating:'D', cost:5930, mass:1.0, power:7.2, heat:0.8},

			14 : {name:'Power Plant', class:4, rating:'E', cost:19880, mass:10, power:10.4, heat:1.0},
		},
		thruster : {
			12 : {name:'Thrusters', class:2, rating:'E', cost:1980, mass:2.5, power:-2.0, optmass:24, minmul: 0.83, optmul: 1.00, maxmul: 1.03},

			15 : {name:'Thrusters', class:4, rating:'E', cost:63010, mass:2.5, power:-4.08, optmass:280, minmul: 0.83, optmul: 1.00, maxmul: 1.03},
		},
		fsd : {
			12 : {name:'Frame Shift Drive', class:2, rating:'E', cost:1980, mass:20, power:-0.16, optmass:48, maxfuel:0.011, fuelpower:2.00, heat:10},

			14 : {name:'Frame Shift Drive', class:4, rating:'E', cost:19880, mass:10, power:-0.24, optmass:280, maxfuel:0.011, fuelpower:2.00, heat:10},
		},
		lifesupport : {
			11 : {name:'Life Support', class:1, rating:'E', cost:520, mass:1.3, power:-0.32, time:300},

			13 : {name:'Life Support', class:3, rating:'E', cost:4050, mass:5, power:-0.42, time:300},
		},
		distributor : {
			11 : {name:'Distributor', class:1, rating:'E', cost:520, mass:1.3, power:-0.32, wepcapacity:10, wepcharge:1.2, engcapacity:8, engcharge:0.4, syscapacity:8, syscharge:0.4},

			15 : {name:'Distributor', class:5, rating:'E', cost:31780, mass:20, power:-0.5, wepcapacity:27, wepcharge:2.9, engcapacity:19, engcharge:1.7, syscapacity:19, syscharge:1.7},
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
}
