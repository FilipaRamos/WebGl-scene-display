/**
 * MyWheels
 * @constructor
 */


function MyWheels(scene, slices, stack) {
 	CGFobject.call(this,scene);

 	this.tampoRoda1 = new MyCircle(this.scene,slices,7.2);
 	this.tampoRoda2 = new MyCircle(this.scene,slices,7.2);

    this.angleRoda1 = 0;	 
 	this.angleRoda2 = 0;	
 	this.roda1 = new MyCylinder(this.scene,slices,stack);
 	this.roda2 = new MyCylinder(this.scene,slices,stack);

    this.wheelAppearance = new CGFappearance(this.scene);
	this.wheelAppearance.loadTexture('../resources/images/tire.png');
	this.wheelAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.wheelAppearance.setSpecular(0, 0, 0, 1);
	this.wheelAppearance.setShininess(10);
	this.wheelAppearance.setDiffuse(0.4,0.4, 0.4, 1);

	this.tampoAppearance = new CGFappearance(this.scene);
	this.tampoAppearance.loadTexture('../resources/images/tampo.png');
	this.tampoAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.tampoAppearance.setSpecular(0, 0, 0, 1);
	this.tampoAppearance.setShininess(10);
	this.tampoAppearance.setDiffuse(0.4,0.4, 0.4, 1);

 };


 MyWheels.prototype = Object.create(CGFobject.prototype);
 MyWheels.prototype.constructor = MyWheels;

 MyWheels.prototype.setAngle = function(angle) {
	this.angle += angle;
};

MyWheels.prototype.setAngleRoda1 = function(AngleRoda1){
	this.angleRoda1 += AngleRoda1;
};

MyWheels.prototype.setAngleRoda2 = function(AngleRoda2){
	this.angleRoda2 += AngleRoda2;
};

MyWheels.prototype.display = function(){

	//Roda1

	this.scene.pushMatrix();
	this.wheelAppearance.apply();
	this.scene.scale(0.2,0.2,0.2);
	this.scene.rotate(-Math.PI/2,0,1,0);
	this.scene.rotate(-this.angleRoda1,0,0,1);
	this.roda1.display();
	this.scene.popMatrix();

	//TampoRoda1

	this.scene.pushMatrix();
	this.tampoAppearance.apply();
	this.scene.translate(0,0,0);
	this.scene.rotate(Math.PI,0,1,0);
	this.scene.scale(0.5,0.2,0.2);
	this.scene.rotate(Math.PI/2,0,1,0);
	this.scene.rotate(this.angleRoda1,0,0,1);
	this.tampoRoda1.display();
	this.scene.popMatrix();

    //tampoTras

	this.scene.pushMatrix();
	this.tampoAppearance.apply();
	this.scene.translate(0,0,0);
	this.scene.rotate(Math.PI,0,1,0);
	this.scene.scale(0.5,0.2,0.2);
	this.scene.rotate(-Math.PI/2,0,1,0);
	this.scene.rotate(this.angleRoda1,0,0,1);
	this.tampoRoda1.display();
	this.scene.popMatrix();
};