

window.drydock = new (function() {

	var baseTitle = 'Elite Drydock'


	var currentParts = {

		ship 			: {},
		bulkhead 	: null,
		core 			: {},
		internal 	: {},
		hardpoint	: {},
		utility		: {},
		stats 		: {
			mass			: null,
			cargo			: null,
		},
	};

	//when new ship is selected from dropdown
	var onSelectShipChange = function(e) {
		handleResetShip(e.target.value);
	};

	//create a list-group-item     int    string
	var createPartRow = function(slotSize,rowID) {
		var newEle = document.createElement("div");
		newEle.className = "list-group-item";
		newEle.id = rowID;
		var sizeDiv = document.createElement("div");
		sizeDiv.className = "part-size";
		sizeDiv.appendChild(document.createTextNode(slotSize.toString()));
		newEle.appendChild(sizeDiv);

		return newEle;
	}; //createPartRow

	//for slots with no part
	var emptyPartRow = function(row) {
		var newDiv = document.createElement('div');
		newDiv.className = 'part-data';
		newDiv.innerHTML = '<h4 class="part-empty">EMPTY</h4>';
		row.appendChild(newDiv);
	};

	//add current info              int   string  element
	var populatePartRow = function(partID,partType,row,ship) {
		//get stats
		var part, size, title, mass, stats;

		if (partID==0) {

			return;
		};

		console.log('populating part: '+partType+partID.toString())
		switch (partType) {
			case "bulkhead":
				part = ship.bulkhead[partID];
				stats = '';
				break;

			case "powerplant":
				part = database.core.powerplant[partID];
				stats = 'Power: ' + part.power.toString() + 'MW';
				break;

			case "thruster":
				part = database.core.thruster[partID];
				stats = 'Optimal Mass: ' + part.optmass.toString() + 'T';
				break;

			case "fsd":
				part = database.core.fsd[partID];
				stats = 'Optimal Mass: ' + part.optmass.toString() + 'T';
				break;

			case "lifesupport":
				part = database.core.lifesupport[partID];
				stats = 'Time: ' + part.time.toString() + 's';
				break;

			case "distributor":
				part = database.core.distributor[partID];
				stats = 'WEP: ' + part.wepcapacity.toString() + '/' + part.wepcharge.toString() + 'MW';
				break;

			case "sensor":
				part = database.core.sensor[partID];
				stats = 'Range: ' + part.optrange.toString() + 'm';
				break;

			case "shipfuel":
				part = database.core.shipfuel[partID];
				stats = '';
				break;

			case "sgen":
				part = database.internal[partID];
				stats = 'Optimal Mass: ' + part.optmass.toString() + 'T';
				break;

			case "rack":
				part = database.internal[partID];
				stats = '';
				break;

			case "scan":
				part = database.internal[partID];
				stats = 'Range: ' + part.range.toString() + 'ls';
				break;
			default:
				console.log('no valid part handler!')
		}
		size = part.class;
		title = size.toString()+part.rating+' '+part.name;
		if (part.cargo) {
			mass = part.cargo.toString()+'T'; //display cargo capacity as mass for racks
		} else {
			mass = part.mass.toString()+'T';
		};

		//mass display
		newDiv = document.createElement('div');
		newDiv.className = 'part-float';
		newDiv.innerHTML = mass;
		row.appendChild(newDiv);
		//name and stats
		var newDiv = document.createElement('div');
		newDiv.className = 'part-data';
		newDiv.innerHTML = '<strong>' + title + '</strong><br>' + stats;
		row.appendChild(newDiv);


	}; //populatePartRow

	//when ship changes or user reverts to stock loadout
	var handleResetShip = function(id) {


		//populate current loadout with stock loadout
		currentParts.ship = database.ship[id];
		currentParts.bulkhead = 1;
		//core components
		currentParts.core = currentParts.ship.defaults.core;
		currentParts.internal = currentParts.ship.defaults.internal;

		document.title = baseTitle + ' - ' + currentParts.ship.name;

		var targetElement;
		var newElement;
		////lay out part rows
		//bulkhead & core
		targetElement = document.getElementById('coreParts');
		targetElement.innerHTML = ''; //clear current stuff

		newElement = targetElement.appendChild( createPartRow(8,'bulkheadRow')); //bulkhead
		populatePartRow(currentParts.bulkhead,'bulkhead',newElement,currentParts.ship);

		newElement = targetElement.appendChild( createPartRow(currentParts.ship.core[0],'powerplantRow')); //powerplant
		populatePartRow(currentParts.core[0],'powerplant',newElement);
		newElement = targetElement.appendChild( createPartRow(currentParts.ship.core[1],'thrusterRow')); //thruster
		populatePartRow(currentParts.core[1],'thruster',newElement);
		newElement = targetElement.appendChild( createPartRow(currentParts.ship.core[2],'fsdRow')); //fsd
		populatePartRow(currentParts.core[2],'fsd',newElement);
		newElement = targetElement.appendChild( createPartRow(currentParts.ship.core[3],'lifesupportRow')); //lifesupport
		populatePartRow(currentParts.core[3],'lifesupport',newElement);
		newElement = targetElement.appendChild( createPartRow(currentParts.ship.core[4],'distributorRow')); //distributor
		populatePartRow(currentParts.core[4],'distributor',newElement);
		newElement = targetElement.appendChild( createPartRow(currentParts.ship.core[5],'sensorRow')); //sensors
		populatePartRow(currentParts.core[5],'sensor',newElement);
		newElement = targetElement.appendChild( createPartRow(currentParts.ship.core[6],'shipfuel')); //sensors
		populatePartRow(currentParts.core[6],'shipfuel',newElement);

		//core internals
		targetElement = document.getElementById('internalParts');
		targetElement.innerHTML = ''; //clear current stuff
		for (var i = 0; i < currentParts.ship.internal.length; i++) {
			newElement = targetElement.appendChild( createPartRow(currentParts.ship.internal[i],'internal'+i.toString()+'Row'));
			if (currentParts.internal[i]==0) {
				emptyPartRow(newElement);
			} else {
				populatePartRow(currentParts.internal[i],database.internal[currentParts.internal[i]].group,newElement);
			};

		};



	}; //handleResetShip


	var onDOMContentLoaded = function(e) {
		var testText = document.createTextNode('initialised');
		document.getElementById('testmessage').appendChild(testText);


		var shipSelect = document.getElementById('ship-select');

		shipSelect.focus();
		shipSelect.addEventListener('change', onSelectShipChange);
		//list stuff for the default loadout

		//no hash fragment, load default setup
		if (window.location.hash.length == 0) {
			handleResetShip(parseInt(shipSelect.value));
		};
	}; //onDOMContentLoaded

	window.addEventListener('DOMContentLoaded', onDOMContentLoaded);
})();
