var rarity = ["Common", "Uncommon", "Rare", "Legendary"];

// ========== Default menu state ==========
// ========================================

function loadDefaultMenu() {
	// Get all elements with class="tabcontent" and hide them
	var tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById("Weapons").style.display = "block";
	document.getElementById("Weapons").className += " active";
    document.getElementById("Weaponshr").innerHTML += "<hr>";
}

// ========================================
// ========================================

// Equipment
class Equipment {
	constructor(name, rarity, type, imageDir, info, attack, defense) {
		this.name = name;
		this.rarity = rarity;
		this.type = type;
		this.imageDir = imageDir;
		this.info = info;
		this.attack = attack;
		this.defense = defense;
		this.equipped = false;
	}
};
var equipmentType = ["Sword", "Shield", "Projectile"];

var equipment = [
	// Ashen Warrior Sword
	new Equipment(
		/*    Name */ "Ashen Warrior Sword",
		/*  Rarity */ rarity[1],
		/*    Type */ equipmentType[0],
		/*   Image */ "image/item-equipment-ashenwarriorsword.png",
		/*    Info */ "Straight sword wielded by ashen warriors. As brittle is it appears. The jagged edge of this tired and worn blade tears into the hides of foes.",
		/*  Attack */ 138,
		/* Defense */ 50
	),
	// Shortsword
	new Equipment(
		/*    Name */ "Shortsword",
		/*  Rarity */ rarity[1],
		/*    Type */ equipmentType[0],
		/*   Image */ "image/item-equipment-shortsword.png",
		/*    Info */ "A small straight sword. Longer than a dagger, but still lightweight. Widely used, as it requires no particular strength. A reasonable choice that will suffice in many situations, but not the thing to take along if you expect to face any serious challenge.",
		/*  Attack */ 100,
		/* Defense */ 50
	),
	// King's Shield
	new Equipment(
		/*    Name */ "King`s Shield",
		/*  Rarity */ rarity[2],
		/*    Type */ equipmentType[1],
		/*   Image */ "image/item-equipment-kingsshield.png",
		/*    Info */ "One fragment of Dark, having taken human shape, became obsessed with the King's soul. Impelled by its own cravings, it sought souls, and strove to make the strength of the Giants its own.",
		/*  Attack */ 28,
		/* Defense */ 100
	),
	// Chaos Shield
	new Equipment(
		/*    Name */ "Chaos Shield",
		/*  Rarity */ rarity[1],
		/*    Type */ equipmentType[1],
		/*   Image */ "image/item-equipment-chaosshield.png",
		/*    Info */ "Once, a brilliant young sorcerer cast away his earthly desires, devoting himself entirely to the Dark that bewitched him. Nebulous, inky and serene, the Dark holds an allure matched only by the fear it strikes in men's hearts. Could it be nature, holding a mirror to mankind?",
		/*  Attack */ 60,
		/* Defense */ 75
	),
	// Buckler
	new Equipment(
		/*    Name */ "Buckler",
		/*  Rarity */ rarity[0],
		/*    Type */ equipmentType[1],
		/*   Image */ "image/item-equipment-buckler.png",
		/*    Info */ "A traditional small metal shield. Small shields are very light and easy to use, but have low stability when attacked. The center of a buckler is convex. designed to brush attacks aside, making parrying easier.",
		/*  Attack */ 60,
		/* Defense */ 75
	),
	// Light Crossbow
	new Equipment(
		/*    Name */ "Light Crossbow",
		/*  Rarity */ rarity[0],
		/*    Type */ equipmentType[2],
		/*   Image */ "image/item-equipment-lightcrossbow.png",
		/*    Info */ "A simple, light crossbow made of wood and steel.",
		/*  Attack */ 60,
		/* Defense */ 75
	)
];


// Armor
class Armor {
	constructor(name, rarity, type, imageDir, info, defense) {
		this.name = name;
		this.rarity = rarity;
		this.type = type;
		this.imageDir = imageDir;
		this.info = info;
		this.defense = defense;
		this.equipped = false;
	}
};
var armorType = ["Head", "Body", "Hands", "Legs", "Ring"];

var armor = [
// Head
	// Faraam Helmet
	new Armor(
		/*    Name */ "Faraam Helmet",
		/*  Rarity */ rarity[0],
		/*    Type */ armorType[0],
		/*   Image */ "image/item-armor-faraamhelmet.png",
		/*    Info */ "Helmet worn by the Forossa Lion Knights. The mighty Lion Knights, worshippers of the war god Faraam, wore heavy armor and were feared for their nimble two-handed swordplay. But their legacy was cut short with the fall of Forossa.",
		/* Defense */ 47
	),
	// Thief Cowl
	new Armor(
		/*    Name */ "Thief Cowl",
		/*  Rarity */ rarity[0],
		/*    Type */ armorType[0],
		/*   Image */ "image/item-armor-thiefcowl.png",
		/*    Info */ "A full face mask. Called a thief mask since most people wearing them are up to no good. Not terribly effective as armor.",
		/* Defense */ 20
	),
// Body
	// Faraam Armor
	new Armor(
		/*    Name */ "Faraam Armor",
		/*  Rarity */ rarity[0],
		/*    Type */ armorType[1],
		/*   Image */ "image/item-armor-faraamarmor.png",
		/*    Info */ "Armor worn by the Forossa Lion Knights. The mighty Lion Knights, worshippers of the war god Faraam, wore heavy armor and were feared for their nimble two-handed swordplay. But their legacy was cut short with the fall of Forossa.",
		/* Defense */ 124
	),
	// Thief Armor
	new Armor(
		/*    Name */ "Thief Armor",
		/*  Rarity */ rarity[0],
		/*    Type */ armorType[1],
		/*   Image */ "image/item-armor-thiefarmor.png",
		/*    Info */ "Armor dyed Black. Allows the wearer to blend in with the dark. Often used by those with ill-intent. Meticulously crafted, and provides fair defense.",
		/* Defense */ 65
	),
// Hands
	// Faraam Gauntlets
	new Armor(
		/*    Name */ "Faraam Gauntlets",
		/*  Rarity */ rarity[0],
		/*    Type */ armorType[2],
		/*   Image */ "image/item-armor-faraamgauntlets.png",
		/*    Info */ "Gauntlets worn by the Forossa Lion Knights. The mighty Lion Knights, worshippers of the war god Faraam, wore heavy armor and were feared for their nimble two-handed swordplay. But their legacy was cut short with the fall of Forossa.",
		/* Defense */ 46
	),
	// Thief Gloves
	new Armor(
		/*    Name */ "Thief Gloves",
		/*  Rarity */ rarity[0],
		/*    Type */ armorType[2],
		/*   Image */ "image/item-armor-thiefgloves.png",
		/*    Info */ "Leather gloves dyed Black. Allows the wearer to blend in with the dark. Often used by those with ill-intent. Meticulously crafted, and provides fair defense.",
		/* Defense */ 30
	),
// Legs
	// Faraam Boots
	new Armor(
		/*    Name */ "Faraam Boots",
		/*  Rarity */ rarity[0],
		/*    Type */ armorType[3],
		/*   Image */ "image/item-armor-faraamboots.png",
		/*    Info */ "Boots worn by the Forossa Lion Knights. The mighty Lion Knights, worshippers of the war god Faraam, wore heavy armor and were feared for their nimble two-handed swordplay. But their legacy was cut short with the fall of Forossa.",
		/* Defense */ 78
	),
	// Thief Boots
	new Armor(
		/*    Name */ "Thief Boots",
		/*  Rarity */ rarity[0],
		/*    Type */ armorType[3],
		/*   Image */ "image/item-armor-thiefboots.png",
		/*    Info */ "Leather boots dyed Black. Allows the wearer to blend in with the dark. Often used by those with ill-intent. Meticulously crafted, and provides fair defense.",
		/* Defense */ 37
	),
// Ring
	// Ring of Leaping
	new Armor(
		/*    Name */ "Ring of Leaping",
		/*  Rarity */ rarity[2],
		/*    Type */ armorType[4],
		/*   Image */ "image/item-armor-ringofleaping.png",
		/*    Info */ "Greatly increases jump height",
		/* Defense */ 0
	),
	// Chloranthy Ring
	new Armor(
		/*    Name */ "Chloranthy Ring",
		/*  Rarity */ rarity[1],
		/*    Type */ armorType[4],
		/*   Image */ "image/item-armor-chloranthyring.png",
		/*    Info */ "Raises action point recovery speed",
		/* Defense */ 0
	)
];


// Items
class Item {
	constructor(name, rarity, type, imageDir, info) {
		this.name = name;
		this.rarity = rarity;
		this.type = type;
		this.imageDir = imageDir;
		this.info = info;
	}
};
var itemType = ["Consumables", "Keys"];

var items = [
// Consumables
	// Estus Flask
	new Item(
		/*    Name */ "Estus Flask",
		/*  Rarity */ rarity[3],
		/*    Type */ itemType[0],
		/*   Image */ "image/item-estusflask.png",
		/*    Info */ "A green glass bottle of unknown make. Fill it with Estus at a bonfire, and drink from it to restore HP. All that is known now is that this flask remains a prized possession of the Undead."
	),
	// Divine Blessing
	new Item(
		/*    Name */ "Divine Blessing",
		/*  Rarity */ rarity[2],
		/*    Type */ itemType[0],
		/*   Image */ "image/item-divineblessing.png",
		/*    Info */ "Holy water endowed with a divine blessing. Cures status effects and fully restores HP. Water blessed by an ancient goddess. Her name is long forgotten, and the Magic Academy of Melfia denies even her existence."
	),
// Keys
	// Heavy Iron Key
	new Item(
		/*    Name */ "Heavy Iron Key",
		/*  Rarity */ rarity[1],
		/*    Type */ itemType[1],
		/*   Image */ "image/item-heavyironkey.png",
		/*    Info */ "A piece of iron shaped like a key. Past the altar deep within the Iron Keep and through a door is the tower that the Old Iron King used to produce iron. The unearthly weight of this chunk of iron is a reminder of the Iron King's own immeasurable strength."
	),
	// House Key
	new Item(
		/*    Name */ "House Key",
		/*  Rarity */ rarity[0],
		/*    Type */ itemType[1],
		/*   Image */ "image/item-housekey.png",
		/*    Info */ "Key to the abandoned house in Majula. Received from Cale the Cartographer. In the past, Majula served as a dumping ground for horrible things, but is now a gathering place for those with no better place to go. It seems this house in Majula was the final home for a few such souls."
	)
];


// Snails
class Snails {
	constructor(name, rarity, type, imageDir, info) {
		this.name = name;
		this.rarity = rarity;
		this.type = type;
		this.imageDir = imageDir;
		this.info = info;
	}
}
var snailType = ["Land", "Aquatic", "Tree"];

var snails = [
// Land
	// Garden Snail
	new Item(
		/*    Name */ "Garden Snail",
		/*  Rarity */ rarity[0],
		/*    Type */ snailType[0],
		/*   Image */ "image/item-snail-gardensnail.png",
		/*    Info */ "Cornu aspersum, known by the common name garden snail, is a species of land snail in the family Helicidae, which includes some of the most familiar land snails. The snail is relished as a food item in some areas, but it is also widely regarded as a pest in gardens and in agriculture, especially in regions where it has been introduced accidentally, and where snails are not usually considered to be a menu item."
	),
	// Milk Snail
	new Item(
		/*    Name */ "Milk Snail",
		/*  Rarity */ rarity[0],
		/*    Type */ snailType[0],
		/*   Image */ "image/item-snail-milksnail.png",
		/*    Info */ "Otala lactea, known as the milk snail or Spanish snail, is a large, edible species of air-breathing land snail, a terrestrial pulmonate gastropod mollusk, in the family Helicidae, the typical snails."
	),
// Aquatic
	// Mystery Snail
	new Item(
		/*    Name */ "Mystery Snail",
		/*  Rarity */ rarity[1],
		/*    Type */ snailType[1],
		/*   Image */ "image/item-snail-mysterysnail.png",
		/*    Info */ "Mystery snails possess structurally complex eyes at the tip of a cephalic eyestalk. These snails possess the ability to regenerate the eye completely after amputation through the mid-eyestalk. They are born with both gills and lungs."
	),
	// Trapdoor Snail
	new Item(
		/*    Name */ "Trapdoor Snail",
		/*  Rarity */ rarity[2],
		/*    Type */ snailType[1],
		/*   Image */ "image/item-snail-trapdoorsnail.png",
		/*    Info */ "The Chinese mystery snail, black snail, or trapdoor snail (Cipangopaludina chinensis), is a large freshwater snail with gills and an operculum, an aquatic gastropod mollusk in the family Viviparidae."
	),
// Tree
	// Liguus
	new Item(
		/*    Name */ "Liguus",
		/*  Rarity */ rarity[3],
		/*    Type */ snailType[2],
		/*   Image */ "image/item-snail-liguus.png",
		/*    Info */ "Liguus is a genus of large tropical air-breathing land snails, more specifically arboreal or tree snails, terrestrial pulmonate gastropod mollusks in the family Orthalicidae. These snails are especially notable for their relatively large size, and for their often brightly colored shells, which sometimes have complex color patterning."
	),
	// Bulimulus
	new Item(
		/*    Name */ "Bulimulus",
		/*  Rarity */ rarity[1],
		/*    Type */ snailType[2],
		/*   Image */ "image/item-snail-bulimulus.png",
		/*    Info */ "Bulimulus is a genus of small to medium-sized tropical or sub-tropical, air-breathing land snails, pulmonate gastropod mollusks in the subfamily Bulimulinae within the family Bulimulidae."
	)
];

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function resetAll() {
	makeEquipmentScreen();
	makeArmorScreen();
	makeItemScreen();
	makeSnailScreen();
	makeEquippedScreen();
}

function setEquipped(itemName, equipped) {
	var item;

	// search for item in armor
	for(var i = 0; i < armor.length; i++) {
		if (itemName === armor[i].name) {
			item = armor[i];
			break;
		}
	}

	// search for item in equipment
	for(var i = 0; i < equipment.length; i++) {
		if (itemName === equipment[i].name) {
			item = equipment[i];
			break;
		}
	}
	
	// set item status
	if (equipped) {
		item.equipped = true;
	} else {
		item.equipped = false;
	}

	// reset
	resetAll();
}

function makeEquippedScreen() {
	var atkHeader = document.getElementById("pATK");
	var atk = 0;
	var def = 0;
	var defHeader = document.getElementById("pDEF");
	var equipmentDiv = document.getElementById("equipEquipment");
	var armorDiv = document.getElementById("equipArmor");
	removeAllChildren(equipmentDiv);
	removeAllChildren(armorDiv);
	equipmentDiv.innerHTML = "<h5>Equipment</h5>";
	equipmentDiv.innerHTML += "<div class=\"blankEquip item\"><div class=\"itemimg\"><img></div><div class=\"itemdesc\"></div></div>";
	var noEquipment = true;
	armorDiv.innerHTML = "<h5>Armor</h5>";
	armorDiv.innerHTML += "<div class=\"blankEquip item\"><div class=\"itemimg\"><img></div><div class=\"itemdesc\"></div></div>";
	var noArmor = true;
	
	for(var i = 0; i < equipment.length; i++){
		if (equipment[i].equipped) {

			// we are equipping something, so get rid of no equipment placeholder
			if (noEquipment) {
				removeAllChildren(equipmentDiv);
				equipmentDiv.innerHTML = "<h5>Equipment</h5>";
				noEquipment = false;
			}

			var itemDiv = document.createElement("div");
			itemDiv.classList.add("item");
			
			var infoDiv = document.createElement("div");
			infoDiv.classList.add("tooltip");
			
			var curItem = equipment[i];
			itemDiv.innerHTML = '<div onclick="setEquipped(\'' + curItem.name + '\', false);"><div class="itemimg"><img src="' + curItem.imageDir + '"></div><div class="itemdesc">' + curItem.name + "<br>ATK: " + curItem.attack + " DEF: " + curItem.defense + "</div></div>"; 
			infoDiv.innerHTML = curItem.info + '<br><div class="click">Unequip&nbsp;<img src="image/icon-lmb.png"></div>';
			
			atk += equipment[i].attack;
			def += equipment[i].defense;
			
			equipmentDiv.appendChild(itemDiv);
			equipmentDiv.appendChild(infoDiv);
		}
	}
	
	for(var i = 0; i < armor.length; i++){
		if (armor[i].equipped) {

			// we are equipping something, so get rid of no equipment placeholder
			if (noArmor) {
				removeAllChildren(armorDiv);
				armorDiv.innerHTML = "<h5>Armor</h5>";
				noArmor = false;
			}
			
			var itemDiv = document.createElement("div");
			itemDiv.classList.add("item");
			
			var infoDiv = document.createElement("div");
			infoDiv.classList.add("tooltip");
			
			var curItem = armor[i];
			itemDiv.innerHTML = '<div onclick="setEquipped(\'' + curItem.name + '\', false);"><div class="itemimg"><img src="' + curItem.imageDir + '"></div><div class="itemdesc">' + curItem.name + "<br>DEF: " + curItem.defense + "</div></div>"; 
			infoDiv.innerHTML = curItem.info + '<br><div class="click">Unequip&nbsp;<img src="image/icon-lmb.png"></div>';
			
			def += armor[i].defense;
			
			armorDiv.appendChild(itemDiv);
			armorDiv.appendChild(infoDiv);
		}
	}
	atkHeader.innerHTML =  atk;
	defHeader.innerHTML =  def;
}

function makeEquipmentScreen(){
	var swordDiv = document.getElementById("sword");
	var shieldDiv = document.getElementById("shields");
	var projectileDiv = document.getElementById("projectile");
	removeAllChildren(swordDiv);
	removeAllChildren(shieldDiv);
	removeAllChildren(projectileDiv);
	swordDiv.innerHTML = "<h5>Swords</h5>";
	shieldDiv.innerHTML = "<h5>Shields</h5>";
	projectileDiv.innerHTML = "<h5>Projectiles</h5>";
	
	for(var i = 0; i < equipment.length; i++){
		if (!(equipment[i].equipped)) {
			var itemDiv = document.createElement("div");
			itemDiv.classList.add("item");
			
			var infoDiv = document.createElement("div");
			infoDiv.classList.add("tooltip");
			
			var curItem = equipment[i];
			itemDiv.innerHTML = '<div onclick="setEquipped(\'' + curItem.name + '\', true);"><div class="itemimg"><img src="' + curItem.imageDir + '"></div><div class="itemdesc">' + curItem.name + "<br>ATK: " + curItem.attack + " DEF: " + curItem.defense + "</div></div>"; 
			infoDiv.innerHTML = curItem.info + '<br><div class="click">Equip&nbsp;<img src="image/icon-lmb.png"></div>';
			switch(curItem.type){
				case "Sword":
					swordDiv.appendChild(itemDiv);
					swordDiv.appendChild(infoDiv);
					break;
				case "Shield":
					shieldDiv.appendChild(itemDiv);
					shieldDiv.appendChild(infoDiv);
					break;
				case "Projectile":
					projectileDiv.appendChild(itemDiv);
					projectileDiv.appendChild(infoDiv);
					break;
				default:
					break;
			}
		}
		
	}
}

function makeArmorScreen(){
	var bodyDiv = document.getElementById("body");
	var handsDiv = document.getElementById("hands");
	var headDiv = document.getElementById("head");
	var legsDiv = document.getElementById("legs");
	var ringsDiv = document.getElementById("rings");
	removeAllChildren(bodyDiv);
	removeAllChildren(handsDiv);
	removeAllChildren(headDiv);
	removeAllChildren(legsDiv);
	removeAllChildren(ringsDiv);
	bodyDiv.innerHTML = "<h5>Body</h5>";
	handsDiv.innerHTML = "<h5>Hands</h5>";
	headDiv.innerHTML = "<h5>Head</h5>";
	legsDiv.innerHTML = "<h5>Legs</h5>";
	ringsDiv.innerHTML = "<h5>Rings</h5>";

	for(var i = 0; i < armor.length; i++){
		if (!(armor[i].equipped)) {
			var itemDiv = document.createElement("div");
			itemDiv.classList.add("item");
			
			var infoDiv = document.createElement("div");
			infoDiv.classList.add("tooltip");
			
			var curItem = armor[i];
			itemDiv.innerHTML = '<div onclick="setEquipped(\'' + curItem.name + '\', true);"><div class="itemimg"><img src="' + curItem.imageDir + '"></div><div class="itemdesc">' + curItem.name + "<br>DEF: " + curItem.defense + "</div>"; 
			infoDiv.innerHTML = curItem.info + '<br><div class="click">Equip&nbsp;<img src="image/icon-lmb.png"></div>';
			switch(curItem.type){
				case "Head":
					headDiv.appendChild(itemDiv);
					headDiv.appendChild(infoDiv);
					break;
				case "Body":
					bodyDiv.appendChild(itemDiv);
					bodyDiv.appendChild(infoDiv);
					break;
				case "Hands":
					handsDiv.appendChild(itemDiv);
					handsDiv.appendChild(infoDiv);
					break;
				case "Legs":
					legsDiv.appendChild(itemDiv);
					legsDiv.appendChild(infoDiv);
					break;
				case "Ring":
					ringsDiv.appendChild(itemDiv);
					ringsDiv.appendChild(infoDiv);
					break;
				default:
					break;
			}
		}
	}
}

function makeItemScreen(){
	var consDiv = document.getElementById("consumables");
	var keyDiv = document.getElementById("keyitems");
	removeAllChildren(consDiv);
	removeAllChildren(keyDiv);
	consDiv.innerHTML = "<h5>Consumables</h5>";
	keyDiv.innerHTML = "<h5>Key Items</h5>";
	
	for(var i = 0; i < items.length; i++){
		var itemDiv = document.createElement("div");
		itemDiv.classList.add("item");
		
		var infoDiv = document.createElement("div");
		infoDiv.classList.add("tooltip");
		
		var curItem = items[i];
		itemDiv.innerHTML = '<div class="itemimg"><img src="' + curItem.imageDir + '"></div><div class="itemdesc">' + curItem.name + "</div>"; 
		infoDiv.innerHTML = curItem.info;
		switch(curItem.type){
			case "Consumables":
				consDiv.appendChild(itemDiv);
				consDiv.appendChild(infoDiv);
				break;
			case "Keys":
				keyDiv.appendChild(itemDiv);
				keyDiv.appendChild(infoDiv);
				break;
			default:
				break;
		}
	}
}

function makeSnailScreen(){
	var aquaDiv = document.getElementById("aquatic");
	var landDiv = document.getElementById("land");
	var treeDiv = document.getElementById("tree");
	removeAllChildren(aquaDiv);
	removeAllChildren(landDiv);
	removeAllChildren(treeDiv);
	aquaDiv.innerHTML = "<h5>Aquatic Snails</h5>";
	landDiv.innerHTML = "<h5>Land Snails</h5>";
	treeDiv.innerHTML = "<h5>Tree Snails</h5>";
	
	for(var i = 0; i < snails.length; i++){
		var itemDiv = document.createElement("div");
		itemDiv.classList.add("item");
		
		var infoDiv = document.createElement("div");
		infoDiv.classList.add("tooltip");
		
		var curItem = snails[i];
		itemDiv.innerHTML = '<div class="itemimg"><img src="' + curItem.imageDir + '"></div><div class="itemdesc">' + curItem.name + "</div>"; 
		infoDiv.innerHTML = curItem.info;
		switch(curItem.type){
			case "Land":
				landDiv.appendChild(itemDiv);
				landDiv.appendChild(infoDiv);
				break;
			case "Aquatic":
				aquaDiv.appendChild(itemDiv);
				aquaDiv.appendChild(infoDiv);
				break;
			case "Tree":
				treeDiv.appendChild(itemDiv);
				treeDiv.appendChild(infoDiv);
				break;
			default:
				break;
		}
	}
}

function openMenu(evt, menuName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    var text = tablinks[i].innerHTML;
	if (text.substr(text.length - 4) == "<hr>"){
    	tablinks[i].innerHTML = text.slice(0, -4);
	}
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
  document.getElementById(menuName + "hr").innerHTML += "<hr>";
}
