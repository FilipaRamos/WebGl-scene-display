var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

function LightingScene() {
	CGFscene.call(this);
	
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);

	this.enableTextures(true);

	this.initCameras();

	this.initLights();

	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	// Scene elements
	this.table = new MyTable(this);
	this.wall = new Plane(this);
	this.left_wall = new MyWall(this);
	this.horizon = new MyQuad(this, 0.0, 1.0, 0.0, 1.0);
	this.floor = new MyQuad(this, 0.0, 10.0, 0.0, 12.0);
	this.boardA = new Plane(this, BOARD_A_DIVISIONS, 0, 1, 0, 1);
	this.boardB = new Plane(this, BOARD_B_DIVISIONS, 0, 1, 0, 1);

	this.bench = new MyBench(this,50,9);
	this.bench2 = new MyBench(this,50,9);

	this.clock = new MyClock(this, 12, 1);

	this.plane = new MyPaperPlane(this);

	this.robot = new MyRobot(this,50,9);


	// Materials
	this.materialDefault = new CGFappearance(this);
	
	this.materialA = new CGFappearance(this);
	this.materialA.setAmbient(0.3,0.3,0.3,1);
	//this.materialA.setDiffuse(0.6,0.6,0.6,1);
	this.materialA.setDiffuse(1,1,1,1);
	this.materialA.setSpecular(0,0,0.8,1);
	this.materialA.setShininess(120);

	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(0.3,0.3,0.3,1);
	//this.materialB.setDiffuse(0.6,0.6,0.6,1);
	this.materialB.setDiffuse(1,1,1,1);
	this.materialB.setSpecular(0.8,0.8,0.8,1);	
	this.materialB.setShininess(120);


	this.floorAppearance = new CGFappearance(this);
	this.floorAppearance.setAmbient(1, 1, 1, 1);
	this.floorAppearance.setDiffuse(1, 1, 1, 0.4);
	this.floorAppearance.setSpecular(1, 1, 1, 1);	
	this.floorAppearance.setShininess(120);
	this.floorAppearance.setTextureWrap('REPEAT', 'REPEAT');
	this.floorAppearance.loadTexture('../resources/images/floor.png');

	this.windowAppearance = new CGFappearance(this);
	this.windowAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.windowAppearance.loadTexture('../resources/images/window.png');
	

	this.boardAppearance = new CGFappearance(this);
	this.boardAppearance.setDiffuse(0.2, 0.2, 0.2, 0.4);
	this.boardAppearance.setSpecular(0.4, 0.4, 0.4, 1);	
	this.boardAppearance.setShininess(100);
	this.boardAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.boardAppearance.loadTexture('../resources/images/board.png');
	
	this.horizonAppearance = new CGFappearance(this);
	this.horizonAppearance.setAmbient(1, 1, 1, 1);
	this.horizonAppearance.setDiffuse(1, 1, 1, 0.4);
	this.horizonAppearance.setSpecular(1, 1, 1, 1);	
	this.horizonAppearance.setShininess(120);

	this.horizonAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.horizonAppearance.loadTexture('../resources/images/paisagem.jpg');

	this.cidadeAppearance = new CGFappearance(this);
	this.cidadeAppearance.setAmbient(1, 1, 1, 1);
	this.cidadeAppearance.setDiffuse(1, 1, 1, 0.4);
	this.cidadeAppearance.setSpecular(1, 1, 1, 1);	
	this.cidadeAppearance.setShininess(120);

	this.cidadeAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.cidadeAppearance.loadTexture('../resources/images/cidade.jpg');

	this.praiaAppearance = new CGFappearance(this);
	this.praiaAppearance.setAmbient(1, 1, 1, 1);
	this.praiaAppearance.setDiffuse(1, 1, 1, 0.4);
	this.praiaAppearance.setSpecular(1, 1, 1, 1);	
	this.praiaAppearance.setShininess(120);
	
	this.praiaAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.praiaAppearance.loadTexture('../resources/images/praia.jpg');
			
	this.slidesAppearace = new CGFappearance(this);
	this.slidesAppearace.setDiffuse(0.8, 0.8, 0.8, 0.4);
	this.slidesAppearace.setSpecular(0.3, 0.3, 0.3, 1);	
	this.slidesAppearace.setShininess(10);
	this.slidesAppearace.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.slidesAppearace.loadTexture('../resources/images/slides.png');


	//this.option1=true; 
	//this.option2=false; 
	this.speed=0.2;
	this.angleRotation = 10;

	this.light1 = true;
	this.light2 = true;
	this.light3 = true;
	this.light4 = true;
	this.light5 = true;

	this.relogio = true;

	this.robotAppearances = [];
	this.robotAppearances.push(this.robot.heartAppearance);
	this.robotAppearances.push(this.robot.headAppearance);
	this.robotAppearances.push(this.robot.shoulderAppearance);
	this.robotAppearanceList = ['Cap. America', 'Iron Man', 'Hulk'];
	this.currRobotAppearance = 'Cap. America';

	this.paisagemList = ['montanha', 'praia', 'cidade'];
	this.Paisagem = 'montanha';


	this.setUpdatePeriod(100);

};


LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0.3,0.3,0.3, 1.0);

	
	this.shader.bind();
	
	// Positions for four lights
	this.lights[0].setPosition(4, 6, 1, 1);
	this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
	this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
	this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
	this.lights[4].setPosition(7.5,7.5,2.0,1);

	this.lights[0].setAmbient(0, 0, 0, 1);
	//this.lights[0].setVisible(true);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1.0,1.0,0,1.0);
	

	this.lights[1].setAmbient(0, 0, 0, 1);
	//this.lights[1].setVisible(true);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	
	this.lights[2].setAmbient(0, 0, 0, 1);
	//this.lights[2].setVisible(true);
	this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setSpecular(1.0,1.0,1.0,1.0);
	this.lights[2].setConstantAttenuation(0);
	this.lights[2].setLinearAttenuation(1.0);
	this.lights[2].setQuadraticAttenuation(0);
	
	this.lights[3].setAmbient(0, 0, 0,1);
	//this.lights[3].setVisible(true);
	this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
//	this.lights[3].setSpecular(1.0,1.0,0,1.0);
//	this.lights[3].setConstantAttenuation(0);
//	this.lights[3].setLinearAttenuation(0);
//	this.lights[3].setQuadraticAttenuation(1.0);
	

	this.lights[4].setAmbient(0, 0, 0,1);
	//this.lights[4].setVisible(true);
	this.lights[4].setDiffuse(1.0, 1.0, 1.0, 1.0);
	
	this.shader.unbind();
};

LightingScene.prototype.updateLights = function() {
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();

	if(this.light1){
		this.lights[0].enable();
	}
	else if(!this.light1){ 
		this.lights[0].disable();	
	}

	if(this.light2)
		this.lights[1].enable();
	else if(!this.light2)
	this.lights[1].disable();

	if(this.light3)
		this.lights[2].enable();
	else if(!this.light3) this.lights[2].disable();

	if(this.light4)
		this.lights[3].enable();
	else if(!this.light4) this.lights[3].disable();

	if(this.light5)
		this.lights[4].enable();
	else if(!this.light5) this.lights[4].disable();
}


LightingScene.prototype.display = function() {
	this.shader.bind();

	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Update all lights used
	this.updateLights();

	// Draw axis
	this.axis.display();

	this.materialDefault.apply();

	// ---- END Background, camera and axis setup

	
	// ---- BEGIN Geometric transformation section

	// ---- END Geometric transformation section


	// ---- BEGIN Primitive drawing section


	// Floor
		this.pushMatrix();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.floorAppearance.apply();
		this.floor.display();
	//	this.wall.display();
		this.popMatrix();


	// Left Wall
	this.pushMatrix();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);		
 		this.windowAppearance.apply();
		this.left_wall.display();
	this.setDiffuse(0.4,0.6,0.9,1);
	//	this.wall.display();
	this.popMatrix();

	// Plane Wall
	this.pushMatrix();
		this.translate(7.5, 4, 0);
		this.scale(15, 8, 0.2);
		this.wall.display();
	this.popMatrix();

	// First Table
	this.pushMatrix();
		this.translate(5, 0, 8);
		this.table.display();
	this.popMatrix();

	// Second Table
	this.pushMatrix();
		this.translate(12, 0, 8);
		this.table.display();
	this.popMatrix();

	// Board A
	this.pushMatrix();
		this.translate(4, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		
		this.slidesAppearace.apply();
	//	this.materialA.apply();
		this.boardA.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
		this.translate(10.5, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		this.boardAppearance.apply();
		//this.materialB.apply();
		this.boardB.display();
	this.popMatrix();


//Clock

	this.pushMatrix();
	this.translate(7.5,7.5,0.0);
	this.scale(0.5,0.5,0.25);
	this.clock.display();
	this.popMatrix();

//Paper Plane
	//this.pushMatrix();
	//this.plane.display();
	//this.popMatrix();


//ROBOT
	
	this.pushMatrix();
	//this.translate(8,0,6);
	//this.translate(6,2,0);
	this.translate(this.robot.Xcoordenada,0.25,this.robot.Ycoordenada);
	this.rotate(this.robot.angle,0,1,0);
	this.robot.display();
	this.popMatrix();

// Left Wall
	this.pushMatrix();
	this.translate(0, 4, 7.5);
	this.rotate(90 * degToRad, 0, 1, 0);
	this.scale(15.1, 8.05, 0.2);		
 	this.windowAppearance.apply();
	this.left_wall.display();
	this.popMatrix();

// Horizon
	this.pushMatrix();
	this.translate(-10, 5, 7.5);
	this.rotate(-90 * degToRad, 0, -1, 0);
	this.scale(30, 15, 0.2);
	if(this.Paisagem == 'montanha')
		this.horizonAppearance.apply();
    if(this.Paisagem == 'cidade')
		this.cidadeAppearance.apply();
	if(this.Paisagem == 'praia')
		this.praiaAppearance.apply();
	this.horizon.display();
	this.popMatrix();

//bench
	this.pushMatrix();
	this.translate(5,0,10);
	this.bench.display();
	this.popMatrix();

	this.pushMatrix();
	this.translate(12,0,10);
	this.bench2.display();
	this.popMatrix();


	// ---- END Primitive drawing section

	this.shader.unbind();
};


LightingScene.prototype.update = function(currTime) {
	if(this.relogio)
		this.clock.update(currTime);

	this.robot.update(currTime);
	
};

LightingScene.prototype.doSomething = function ()
{ console.log("Doing something..."); };



LightingScene.prototype.Akey = function ()
{ 
	this.robot.setAngle(this.angleRotation*Math.PI/180);
	this.robot.setAngleRoda1((this.angleRotation*Math.PI)/180);
	this.robot.setAngleRoda2((-this.angleRotation*Math.PI)/180);


 };


 LightingScene.prototype.Dkey = function ()
{ 
	this.robot.setAngle(-this.angleRotation*Math.PI/180);
	this.robot.setAngleRoda1((-this.angleRotation*Math.PI)/180);
	this.robot.setAngleRoda2((this.angleRotation*Math.PI)/180);


 };

 LightingScene.prototype.Wkey = function ()
{ 	
		this.robot.setY(this.speed * Math.cos(this.robot.angle));
		this.robot.setX(this.speed * Math.sin(this.robot.angle));
		this.robot.setAngleRoda1(-(this.angleRotation*Math.PI)/180);
		this.robot.setAngleRoda2(-(this.angleRotation*Math.PI)/180);
	if(this.robot.dir){
		if(this.robot.angleBraco1 >= Math.PI/4)
			this.robot.dir = false;
		else
			this.robot.setAngleBraco1((5*Math.PI)/180);
	}
	else
	{
		if(this.robot.angleBraco1 <= -Math.PI/4)
			this.robot.dir = true;
		else
			this.robot.setAngleBraco1(-(5*Math.PI)/180)
	}
 };


 LightingScene.prototype.Skey = function ()
{ 
		this.robot.setY(-this.speed * Math.cos(this.robot.angle));
		this.robot.setX(-this.speed * Math.sin(this.robot.angle));
		this.robot.setAngleRoda1((this.angleRotation*Math.PI)/180);
		this.robot.setAngleRoda2((this.angleRotation*Math.PI)/180);
	if(this.robot.dir){
		if(this.robot.angleBraco1 >= Math.PI/4)
			this.robot.dir = false;
		else
			this.robot.setAngleBraco1((5*Math.PI)/180);
	}
	else
	{
		if(this.robot.angleBraco1 <= -Math.PI/4)
			this.robot.dir = true;
		else
			this.robot.setAngleBraco1(-(5*Math.PI)/180)
	}
};

