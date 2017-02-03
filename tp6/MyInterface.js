/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface() {
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);
	
	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui
	
	this.gui = new dat.GUI();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

	this.gui.add(this.scene, 'doSomething');	

	// add a group of controls (and open/expand by defult)
	
	/*
	var group=this.gui.addFolder("Options");
	group.open();
 
	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;
	
	group.add(this.scene, 'option1');
	group.add(this.scene, 'option2');
	
	*/

	var luzes=this.gui.addFolder("Options");
	luzes.open();
	
	luzes.add(this.scene, 'light1');
	luzes.add(this.scene, 'light2');
	luzes.add(this.scene, 'light3');
	luzes.add(this.scene, 'light4');
	luzes.add(this.scene, 'light5');
	
	var relogio=this.gui.addFolder("Clock Options");
	relogio.open();
	relogio.add(this.scene, 'relogio');

	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters
	
	this.gui.add(this.scene, 'speed', 0, 1);
	this.gui.add(this.scene, 'angleRotation', 1, 45);
	this.gui.add(this.scene, 'currRobotAppearance', this.scene.robotAppearanceList);
	this.gui.add(this.scene, 'Paisagem', this.scene.paisagemList);


	return true;
};

/**
 * processKeyboard
 * @param event {Event}
 */
MyInterface.prototype.processKeyboard = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyboard.call(this,event);
	
	// Check key codes e.g. here: http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
	// or use String.fromCharCode(event.keyCode) to compare chars
	
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.keyCode)
	{
		
		case(65): //A
			console.log("Key 'A' pressed");
			this.scene.Akey();
			break;
		case(97): //a 
			console.log("Key 'a' pressed");
			this.scene.Akey();
			break;
		case(68): //D
			console.log("Key 'D' pressed");
			this.scene.Dkey();
			break;
		case(100): //d
			console.log("Key 'd' pressed");
			this.scene.Dkey();
			break;
		case(87): //W
			console.log("Key 'W' pressed");
			this.scene.Wkey();
			break;
		case(119): //w
			console.log("Key 'w' pressed");
			this.scene.Wkey();
			break;
		case(83): //S
 			console.log("Key 'S' pressed");
			this.scene.Skey();
			break;
		case(115): //s
 			console.log("Key 's' pressed");
			this.scene.Skey();
			break;
		case(79): //O
			console.log("Key 'O' pressed");
			this.scene.robot.Hi = true;
			break;
		case(111)://o
			console.log("Key 'o' pressed");
			this.scene.robot.setHand();
			break;
	};
};
