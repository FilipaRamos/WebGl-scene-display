/**
 * MyArm
 * @constructor
 */


function MyArm(scene, slices, stack) {
 	CGFobject.call(this,scene);

 	this.braco = new MyCylinder(this.scene,slices,stack);
 	this.mao = new MySphere(this.scene, 50,50);
 	this.ombro = new MySphere(this.scene, 50,50);
 
	this.headAppearance = new CGFappearance(this.scene);
	this.headAppearance.loadTexture('../resources/images/red.png');
	this.headAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.headAppearance.setSpecular(0, 0, 0, 1);
	this.headAppearance.setShininess(10);
	this.headAppearance.setDiffuse(0.4,0.4, 0.4, 1);

	this.armAppearance = new CGFappearance(this.scene);
	this.armAppearance.loadTexture('../resources/images/arm.png');
	this.armAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.armAppearance.setSpecular(0, 0, 0, 1);
	this.armAppearance.setShininess(10);
	this.armAppearance.setDiffuse(0.4,0.4, 0.4, 1);

	this.shoulderAppearance = new CGFappearance(this.scene);
	this.shoulderAppearance.loadTexture('../resources/images/fundo.png');
	this.shoulderAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.shoulderAppearance.setSpecular(0, 0, 0, 1);
	this.shoulderAppearance.setShininess(10);
	this.shoulderAppearance.setDiffuse(0.4,0.4, 0.4, 1);
		
	this.ironManArm = new CGFappearance(this.scene);
	this.ironManArm.loadTexture('../resources/images/arm_ironMan.png');
	this.ironManArm.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.ironManArm.setSpecular(0, 0, 0, 1);
	this.ironManArm.setShininess(10);
	this.ironManArm.setDiffuse(0.4,0.4, 0.4, 1);

	this.ironManHand = new CGFappearance(this.scene);
	this.ironManHand.loadTexture('../resources/images/hand_iron_man.png');
	this.ironManHand.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.ironManHand.setSpecular(0, 0, 0, 1);
	this.ironManHand.setShininess(10);
	this.ironManHand.setDiffuse(0.4,0.4, 0.4, 1);

	this.hulkArm = new CGFappearance(this.scene);
	this.hulkArm.loadTexture('../resources/images/hulk_arm.png');
	this.hulkArm.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.hulkArm.setSpecular(0, 0, 0, 1);
	this.hulkArm.setShininess(10);
	this.hulkArm.setDiffuse(0.4,0.4, 0.4, 1);



 };


 MyArm.prototype = Object.create(CGFobject.prototype);
 MyArm.prototype.constructor = MyArm;

 MyArm.prototype.setAngle = function(angle) {
	this.angle += angle;
};

       //♥
  


MyArm.prototype.display = function(){

	var comp = 0.15

	//ombro1
	this.scene.pushMatrix();
	if(this.scene.currRobotAppearance == 'Cap. America')	
		this.shoulderAppearance.apply();
	else if(this.scene.currRobotAppearance == 'Iron Man')
		this.ironManHand.apply();
	else if(this.scene.currRobotAppearance == 'Hulk')
		this.hulkArm.apply();	 
	//this.scene.translate(larg+0.15,(3/4)*comp,0);
	this.scene.scale(0.15,0.15,0.15);
	this.scene.rotate(-Math.PI/2,1,0,0);
	this.mao.display();
	this.scene.popMatrix();

	//braco1
	
	this.scene.pushMatrix();
	if(this.scene.currRobotAppearance == 'Cap. America')
		this.armAppearance.apply();
	else if(this.scene.currRobotAppearance == 'Iron Man')
		this.ironManArm.apply();
	else if(this.scene.currRobotAppearance == 'Hulk')
		this.hulkArm.apply();	 
	//this.scene.translate(0.5+0.15,0.5+(1/4)*comp,0);
	this.scene.rotate(Math.PI/2,1,0,0);
	this.scene.scale(0.15,0.15,0.25);
	this.braco.display();
	this.scene.popMatrix();
	
	//mao1
	
	this.scene.pushMatrix();
	if(this.scene.currRobotAppearance == 'Cap. America')	
		this.headAppearance.apply();
	else if(this.scene.currRobotAppearance == 'Iron Man')
		this.ironManHand.apply();
	else if(this.scene.currRobotAppearance == 'Hulk')
		this.hulkArm.apply();	 
	this.scene.translate(/*0.5+0.15*/0,-0.25,0);
	this.scene.scale(0.15,0.15,0.15);
	this.scene.rotate(Math.PI/2,1,0,0);
	this.mao.display();
	this.scene.popMatrix();
};
 