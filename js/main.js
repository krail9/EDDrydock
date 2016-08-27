window.drydock = (function () {

	var baseTitle = 'Elite Drydock';

	//part selection menu vars
	var currentSlot = null;
	var currentPanel = 'powerplantmenu';

	//cached ship components and stats
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

	//add event to this object -with ie<9 support
	var setEventHandler = function(obj, name, fn) {
		if (obj.addEventListener) {
			return(obj.addEventListener(name, fn));
		} else if (obj.attachEvent){
			return(obj.attachEvent("on" + name, function() {return(fn.call(obj));}));
		}
	};

	//let us swap parts when a slot is clicked
	var onSlotClick = function() {
		console.log(this.id+' clicked! parent: '+this.parentElement.id);
		currentSlot = this.id;

		$('#menucontainer').appendTo(this);
		$('#menucontainer').show();
		$('#pageoverlay').show();

		//show appropriate menu section
		$('#'+currentPanel).hide();
		currentPanel = getSlotMenu(currentSlot);
		$('#'+currentPanel).show();

		//show appropriate part sizes
		var slotSize = getSlotSize(currentSlot);
		console.log('this slot size: '+slotSize.toString());

		var panelRows = $('#'+currentPanel).find('.menu-row');
		for (var i = 0; i < panelRows.length; i++) {
			if (slotSize >= database.menus[currentPanel].sizeIndex[i]) {
				$(panelRows[i]).show();
			} else {
				$(panelRows[i]).hide();
			}
		}

	};
	//hide menu when clicking elsewhere
	var onOverlayClick = function() {
		hidePartMenu();
	};

	var onMenuButtonClick = function(partID) {
		console.log('menu button clicked!');
		if (partID) {
			console.log('passed part ID: '+partID);
		} else {
			console.log('no part ID passed');
		}
		hidePartMenu();

		assignPartFromSlot(partID,currentSlot);
		internalPartRow(partID,currentSlot.split('R')[0],document.getElementById(currentSlot),currentParts.ship);

	};

	//when new ship is selected from dropdown
	var onSelectShipChange = function(e) {
		handleResetShip(e.target.value);
	};

	var hidePartMenu = function() {
		$('#menucontainer').hide();
		$('#pageoverlay').hide();
		$('#menucontainer').appendTo('#footer');
	};

	//takes ID of a partrow and returns max size
	var getSlotSize = function(rowID) {
		var idParts = rowID.split('_');
		switch (idParts[0]) {
			case 'powerplantRow': return currentParts.ship.core[0];
			case 'thrusterRow': return currentParts.ship.core[1];
			case 'fsdRow': return currentParts.ship.core[2];
			case 'lifesupportRow': return currentParts.ship.core[3];
			case 'distributorRow': return currentParts.ship.core[4];
			case 'sensorRow': return currentParts.ship.core[5];
			case 'shipfuelRow': return currentParts.ship.core[6];
			default: return 1;
		}
	};

	//takes ID of a part row and returns corresponding menu id
	var getSlotMenu = function(rowID) {
		var idParts = rowID.split('_');
		switch (idParts[0]) {
			case 'powerplantRow': return 'powerplantmenu';
			case 'thrusterRow': return 'thrustermenu';
			case 'fsdRow': return 'fsdmenu';
			case 'lifesupportRow': return 'lifesupportmenu';
			case 'distributorRow': return 'distributormenu';
			case 'sensorRow': return 'sensormenu';
			case 'shipfuelRow': return 'shipfuelmenu';
			default: return;
		}
	};

	//take part ID and assign to correct section currentParts based on row
	var assignPartFromSlot = function(partID,rowID) {
		var idParts = rowID.split('_');
		switch (idParts[0]) {
			case 'powerplantRow': currentParts.core[0] = partID;
				break;
			case 'thrusterRow': currentParts.core[1] = partID;
				break;
			case 'fsdRow': currentParts.core[2] = partID;
				break;
			case 'lifesupportRow': currentParts.core[3] = partID;
				break;
			case 'distributorRow': currentParts.core[4] = partID;
				break;
			case 'sensorRow': currentParts.core[5] = partID;
				break;
			case 'shipfuelRow': currentParts.core[6] = partID;
				break;
			default: break;
		}
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
		setEventHandler(newEle,'click',onSlotClick);
		return newEle;
	}; //createPartRow

	//for slots with no part
	var emptyPartRow = function(row) {
		var newDiv = document.createElement('div');
		newDiv.className = 'part-data';
		newDiv.innerHTML = '<h4 class="part-empty">EMPTY</h4>';
		row.appendChild(newDiv);
	};

	var hardpointPartRow = function(partID,row) {

		var part, size, title, mass, stats;
		console.log('populating hardpoint part: '+partID.toString());
		part = database.hardpoint[partID];

		stats = 'Dam: '+part.damage.toString()+' DPS: '+part.dps.toString();

		size = part.class;
		title = size.toString()+part.rating+' '+part.name;
		if (part.cargo) {
			mass = part.cargo.toString()+'T'; //display cargo capacity as mass for racks
		} else {
			mass = part.mass.toString()+'T';
		}

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

	};

	//add current info              int   string  element
	var internalPartRow = function(partID,partType,row,ship) {
		//get stats
		var part, size, title, mass, stats;
		row.innerHTML = '';
		console.log('populating part: '+partType+partID.toString());
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

			case "launcher":
				part = database.utility[partID];
				stats = 'Clip: ' + part.clip.toString() + ' Ammo:' + part.ammo.toString();
				break;
			default:
				console.log('no valid part handler!');
		}
		size = part.class;
		title = size.toString()+part.rating+' '+part.name;
		if (part.cargo) {
			mass = part.cargo.toString()+'T'; //display cargo capacity as mass for racks
		} else {
			mass = part.mass.toString()+'T';
		}

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


	}; //internalPartRow

	//when ship changes or user reverts to stock loadout
	var handleResetShip = function(id) {


		//populate current loadout with stock loadout
		currentParts.ship = database.ship[id];
		currentParts.bulkhead = 1;
		//core components
		currentParts.core = currentParts.ship.defaults.core;
		currentParts.internal = currentParts.ship.defaults.internal;
		currentParts.hardpoint = currentParts.ship.defaults.hardpoint;
		currentParts.utility = currentParts.ship.defaults.utility;

		document.title = baseTitle + ' - ' + currentParts.ship.name;

		var targetElement;
		var newElement;
		////lay out part rows
		//bulkhead & core
		targetElement = document.getElementById('coreParts');
		targetElement.innerHTML = ''; //clear current stuff

		newElement = targetElement.appendChild( createPartRow(8,'bulkheadRow')); //bulkhead
		internalPartRow(currentParts.bulkhead,'bulkhead',newElement,currentParts.ship);

		newElement = targetElement.appendChild( createPartRow(currentParts.ship.core[0],'powerplantRow')); //powerplant
		internalPartRow(currentParts.core[0],'powerplant',newElement);
		newElement = targetElement.appendChild( createPartRow(currentParts.ship.core[1],'thrusterRow')); //thruster
		internalPartRow(currentParts.core[1],'thruster',newElement);
		newElement = targetElement.appendChild( createPartRow(currentParts.ship.core[2],'fsdRow')); //fsd
		internalPartRow(currentParts.core[2],'fsd',newElement);
		newElement = targetElement.appendChild( createPartRow(currentParts.ship.core[3],'lifesupportRow')); //lifesupport
		internalPartRow(currentParts.core[3],'lifesupport',newElement);
		newElement = targetElement.appendChild( createPartRow(currentParts.ship.core[4],'distributorRow')); //distributor
		internalPartRow(currentParts.core[4],'distributor',newElement);
		newElement = targetElement.appendChild( createPartRow(currentParts.ship.core[5],'sensorRow')); //sensors
		internalPartRow(currentParts.core[5],'sensor',newElement);
		newElement = targetElement.appendChild( createPartRow(currentParts.ship.core[6],'shipfuelRow')); //sensors
		internalPartRow(currentParts.core[6],'shipfuel',newElement);

		//core internals
		targetElement = document.getElementById('internalParts');
		targetElement.innerHTML = ''; //clear current stuff
		for (var i = 0; i < currentParts.ship.internal.length; i++) {
			newElement = targetElement.appendChild( createPartRow(currentParts.ship.internal[i],'internalRow_'+i.toString()));
			if (currentParts.internal[i]===0) {
				emptyPartRow(newElement);
			} else {
				internalPartRow(currentParts.internal[i],database.internal[currentParts.internal[i]].group,newElement);
			}
		}
		//hardpoints
		targetElement = document.getElementById('hardpointParts');
		targetElement.innerHTML = ''; //clear current stuff
		for (i = 0; i < currentParts.ship.hardpoint.length; i++) {
			newElement = targetElement.appendChild( createPartRow(currentParts.ship.hardpoint[i],'hardpointRow_'+i.toString()));
			if (currentParts.hardpoint[i]===0) {
				emptyPartRow(newElement);
			} else {
				hardpointPartRow(currentParts.hardpoint[i],newElement);
			}
		}
		//utilities
		targetElement = document.getElementById('utilityParts');
		targetElement.innerHTML = ''; //clear current stuff
		console.log('utilites: '+currentParts.ship.utility.length.toString());
		for (i = 0; i < currentParts.ship.utility.length; i++) {
			newElement = targetElement.appendChild( createPartRow(currentParts.ship.utility[i],'utilityRow_'+i.toString()));
			if (currentParts.utility[i]===0) {
				emptyPartRow(newElement);
			} else {
				internalPartRow(currentParts.utility[i],database.utility[currentParts.utility[i]].group,newElement);
			}
		}

	}; //handleResetShip

	var constructPartMenu = function(menuContainer) {

		for (var i = 0; i < database.menus.index.length; i++) {

			var currentID = database.menus.index[i];
			var currentMenu = database.menus[currentID];
			console.log('found menu panel:'+currentID);
			console.log('menu name: '+currentMenu.name+', header: '+currentMenu.hasheader.toString());

			var newPanel = document.createElement('div');
			newPanel.className = 'panel panel-primary';
			newPanel.id = currentID;
			if (currentMenu.hasheader) {
				var newHeader = document.createElement('div');
				newHeader.className = 'panel-heading';
				newHeader.appendChild(document.createTextNode(currentMenu.name));
				newPanel.appendChild(newHeader);
			}
			var newBody = document.createElement('div');
			newBody.className = 'panel-body';

			console.log('current menu has '+currentMenu.contents.length.toString()+' rows');
			switch (currentID) {
				//internals and hardpoints use a special 'part type' menu which links to a oart list
				case 'internalmenu': break;
				case 'hardpointmenu': break;
				default:
					//most menus are handled as part lists
					for (var j = 0; j < currentMenu.contents.length; j++) {
						var newRow = document.createElement('div');
						newRow.className = 'menu-row';
						console.log('current row has '+currentMenu.contents[j].length.toString()+' elements');
						for (var k = 0; k < currentMenu.contents[j].length; k++) {

							(function () {
								var currentItem = currentMenu.contents[j][k];
								console.log('current button is for '+currentItem.label+', part: '+currentItem.part);

								var newButton = document.createElement('div');
								newButton.className = 'btn btn-default btn-type0';
								newButton.addEventListener('click', function(e) {e.stopPropagation();onMenuButtonClick(currentItem.part);}, false);
								newButton.appendChild(document.createTextNode(currentItem.label));
								newRow.appendChild(newButton);
							}()); //immediate invocation
						}
						newBody.appendChild(newRow);
					}
			}

			newPanel.appendChild(newBody);
			menuContainer.appendChild(newPanel);
		}

		for (i = 0; i < database.menus.index.length; i++) {
			$('#'+database.menus.index[i]).hide();
		}


	};

	var onDOMContentLoaded = function(e) {
		var testText = document.createTextNode('initialised');
		document.getElementById('testmessage').appendChild(testText);
		//$('#menucontainer').hide();

		var shipSelect = document.getElementById('ship-select');

		//setEventHandler(document.getElementById('pageoverlay'),'click',onOverlayClick);
		document.getElementById('pageoverlay').addEventListener('click',onOverlayClick);

		constructPartMenu(document.getElementById('menucontainer'));

		$('#pageoverlay').hide();
		$('#menucontainer').hide();

		shipSelect.focus();
		shipSelect.addEventListener('change', onSelectShipChange);

		//list stuff for the default loadout

		//no hash fragment, load default setup
		if (window.location.hash.length === 0) {
			handleResetShip(parseInt(shipSelect.value));
		}
	}; //onDOMContentLoaded

	window.addEventListener('DOMContentLoaded', onDOMContentLoaded);


})();
