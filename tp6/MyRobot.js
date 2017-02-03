/**
 * MyRobot
 * @constructor
 */


function MyRobot(scene, slices, stack) {
 	CGFobject.call(this,scene);
 	
   
 	this.cabeca = new MySphere(this.scene, 50, 50);	
 	this.corpo = new MyCylinder(this.scene,slices,stack);
 	this.tampoRoda1 = new MyCircle(this.scene,slices,7.2);
 	this.tampoRoda2 = new MyCircle(this.scene,slices,7.2);
 	this.tampoCorpo = new MyCircle(this.scene,slices,7.2);

 	this.roda1 = new MyCylinder(this.scene,slices,stack);
 	this.roda2 = new MyCylinder(this.scene,slices,stack);

 	this.braco = new MyArm(this.scene,slices,stack);
 
 	this.angleRoda1 = 0;	 
 	this.angleRoda2 = 0;	
 	this.dir = true;
 	this.angleBraco1 = 0;
    this.angle = (-7*Math.PI/8);
    this.Xcoordenada = 8;
    this.Ycoordenada = 6;

	this.headAppearance = new CGFappearance(this.scene);
	this.headAppearance.loadTexture('../resources/images/red.png');
	this.headAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.headAppearance.setSpecular(0, 0, 0, 1);
	this.headAppearance.setShininess(10);
	this.headAppearance.setDiffuse(0.4,0.4, 0.4, 1);

	this.ironManHead = new CGFappearance(this.scene);
	this.ironManHead.loadTexture('../resources/images/hand_iron_man.png');
	this.ironManHead.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.ironManHead.setSpecular(0, 0, 0, 1);
	this.ironManHead.setShininess(10);
	this.ironManHead.setDiffuse(0.4,0.4, 0.4, 1);

	this.tampoCapAppearance = new CGFappearance(this.scene);
	this.tampoCapAppearance.loadTexture('../resources/images/fundo.png');
	this.tampoCapAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.tampoCapAppearance.setSpecular(0, 0, 0, 1);
	this.tampoCapAppearance.setShininess(10);
	this.tampoCapAppearance.setDiffuse(0.4,0.4, 0.4, 1);

	this.tampoIronAppearance = new CGFappearance(this.scene);
	this.tampoIronAppearance.loadTexture('../resources/images/hand_iron_man.png');
	this.tampoIronAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.tampoIronAppearance.setSpecular(0, 0, 0, 1);
	this.tampoIronAppearance.setShininess(10);
	this.tampoIronAppearance.setDiffuse(0.4,0.4, 0.4, 1);

	this.tampoHulkAppearance = new CGFappearance(this.scene);
	this.tampoHulkAppearance.loadTexture('../resources/images/hulk_arm.png');
	this.tampoHulkAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.tampoHulkAppearance.setSpecular(0, 0, 0, 1);
	this.tampoHulkAppearance.setShininess(10);
	this.tampoHulkAppearance.setDiffuse(0.4,0.4, 0.4, 1);

 	this.heartAppearance = new CGFappearance(this.scene);
	this.heartAppearance.loadTexture('../resources/images/cemas.png');
	this.heartAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.heartAppearance.setSpecular(0, 0, 0, 1);
	this.heartAppearance.setShininess(10);
	this.heartAppearance.setDiffuse(0.4,0.4, 0.4, 1);

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


	this.ironManBody = new CGFappearance(this.scene);
	this.ironManBody.loadTexture('../resources/images/iron_man_body.jpg');
	this.ironManBody.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.ironManBody.setSpecular(0, 0, 0, 1);
	this.ironManBody.setShininess(10);
	this.ironManBody.setDiffuse(0.4,0.4, 0.4, 1);


	this.HulkBody = new CGFappearance(this.scene);
	this.HulkBody.loadTexture('../resources/images/hulk_body.jpg');
	this.HulkBody.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.HulkBody.setSpecular(0, 0, 0, 1);
	this.HulkBody.setShininess(10);
	this.HulkBody.setDiffuse(0.4,0.4, 0.4, 1);

	this.hulkArm = new CGFappearance(this.scene);
	this.hulkArm.loadTexture('../resources/images/hulk_arm.png');
	this.hulkArm.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.hulkArm.setSpecular(0, 0, 0, 1);
	this.hulkArm.setShininess(10);
	this.hulkArm.setDiffuse(0.4,0.4, 0.4, 1);


	this.rotArm = 0;
	this.armDir = 1;

	this.handMov = 0;
	this.xRotTemp = 999;
	this.zRotTemp = 999;
	this.lastUpdate = -1;
	this.iteracoes = 0;



 };


 MyRobot.prototype = Object.create(CGFobject.prototype);
 MyRobot.prototype.constructor = MyRobot;

 MyRobot.prototype.setAngle = function(angle) {
	this.angle += angle;
};

 MyRobot.prototype.setX = function(Xcoordenada) {
	this.Xcoordenada += Xcoordenada;
};

 MyRobot.prototype.setY = function(Ycoordenada) {
	this.Ycoordenada += Ycoordenada;
};

MyRobot.prototype.setAngleRoda1 = function(AngleRoda1){
	this.angleRoda1 += AngleRoda1;
};

MyRobot.prototype.setAngleRoda2 = function(AngleRoda2){
	this.angleRoda2 += AngleRoda2;
};

MyRobot.prototype.setAngleBraco1 = function(AngleBraco1){
	this.angleBraco1 += AngleBraco1;
};

MyRobot.prototype.setRot = function(AngRot){
	this.angRot += AngRot;
};

MyRobot.prototype.moveArms2 = function (speed)
{
	if(this.rotArm >= 15 || this.rotArm <= -15){
		this.armDir = this.armDir * (-1);
	}
	
	this.rotArm += this.armDir;
}

/*
 MyRobot.prototype.initBuffers = function() {
        
 
      this.vertices = [];
 
      this.indices = [];
 

        this.vertices.push(0.5,0.3,0); //0
        this.vertices.push(-0.5,0.3,0);//1
        this.vertices.push(0,0.3,2);   //2

        this.indices.push(0,1,2);


        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
 };
*/
       //♥
  


MyRobot.prototype.display = function(){

	var comp = 1;
	var larg = (1/2)*comp;
	
	//cabeça
	//Sphere 

	this.scene.pushMatrix();
	if(this.scene.currRobotAppearance == 'Cap. America')
		this.headAppearance.apply();
	else if(this.scene.currRobotAppearance == 'Iron Man')
		this.ironManHead.apply();
	else if(this.scene.currRobotAppearance == 'Hulk')
		this.hulkArm.apply();	 
	this.scene.translate(0,1,0);
	this.scene.rotate(-Math.PI/2,1,0,0);
	this.scene.scale(0.5,0.5,0.5)
	this.cabeca.display();
	this.scene.popMatrix();

	//corpo
	this.scene.pushMatrix();
	if(this.scene.currRobotAppearance == 'Cap. America')
		this.heartAppearance.apply();
	else if(this.scene.currRobotAppearance == 'Iron Man')
		this.ironManBody.apply();
	else if(this.scene.currRobotAppearance == 'Hulk')
		this.HulkBody.apply();	 
	this.scene.scale(larg,comp,larg);
	this.scene.rotate(-Math.PI/2,1,0,0);
	this.corpo.display();
	this.scene.popMatrix();

	//TampoCorpo
	this.scene.pushMatrix();
	if(this.scene.currRobotAppearance == 'Cap. America')
		this.tampoCapAppearance.apply();
	else if(this.scene.currRobotAppearance == 'Iron Man')
		this.tampoIronAppearance.apply();
	else if(this.scene.currRobotAppearance == 'Hulk')
		this.tampoHulkAppearance.apply();
	this.scene.scale(larg,0,larg);
	this.scene.rotate(Math.PI/2,1,0,0);
	this.tampoCorpo.display();
	this.scene.popMatrix();


	//braco1
		this.scene.pushMatrix();
		this.scene.translate(0.5+0.15,(3/4)*comp, 0);
//	if(this.handMov == 0)
		this.scene.rotate(this.angleBraco1,1,0,0);
//	else {
//		this.scene.rotate(this.xRotTemp*Math.PI/180, 1,0,0);
//		this.scene.rotate(this.zRotTemp*Math.PI/180, 0,0,1);
//	}
		this.braco.display();
		this.scene.popMatrix();
	
	//braco2
	this.scene.pushMatrix();
	this.scene.translate(-(0.5+0.15),(3/4)*comp, 0);
	if(this.handMov == 0)
		this.scene.rotate(-this.angleBraco1,1,0,0);
	else {
		this.scene.rotate(this.xRotTemp*Math.PI/180, 1,0,0);
		this.scene.rotate(this.zRotTemp*Math.PI/180, 0,0,1);
	}
	
	this.braco.display();
	this.scene.popMatrix();

	//Roda1

	this.scene.pushMatrix();
	this.wheelAppearance.apply();
	this.scene.translate(-0.5,0,0);
	this.scene.scale(0.2,0.2,0.2);
	this.scene.rotate(-Math.PI/2,0,1,0);
	this.scene.rotate(-this.angleRoda1,0,0,1);
	this.roda1.display();
	this.scene.popMatrix();

	//Tampo1Roda1

	this.scene.pushMatrix();
	this.tampoAppearance.apply();
	this.scene.translate(0.2,0,0);
	this.scene.rotate(Math.PI,0,1,0);
	this.scene.scale(0.5,0.2,0.2);
	this.scene.rotate(-Math.PI/2,0,1,0);
	this.scene.rotate(-this.angleRoda1,0,0,1);
	this.tampoRoda1.display();
	this.scene.popMatrix();

	//Tampo2Roda1
	this.scene.pushMatrix();
	this.tampoAppearance.apply();
	this.scene.translate(-1,0,0);
	this.scene.scale(0.5,0.2,0.2);
	this.scene.rotate(Math.PI/2,0,1,0);
	this.scene.rotate(-this.angleRoda1,0,0,1);
	this.tampoRoda1.display();
	this.scene.popMatrix();

	//Roda2

	this.scene.pushMatrix();
	this.wheelAppearance.apply();
	this.scene.translate(0.7,0,0);
	this.scene.scale(0.2,0.2,0.2);
	this.scene.rotate(-Math.PI/2,0,1,0);
	this.scene.rotate(this.angleRoda2,0,0,1);
	this.roda2.display();
	this.scene.popMatrix();


	//Tampo1Roda2

	this.scene.pushMatrix();	
	this.tampoAppearance.apply();
	this.scene.translate(-0.5,0,0);
	this.scene.scale(0.2,0.2,0.2);
	this.scene.rotate(-Math.PI/2,0,1,0);
	this.scene.rotate(this.angleRoda2,0,0,1);
	this.tampoRoda2.display();
	this.scene.popMatrix();


	//Tampo2Roda2

	this.scene.pushMatrix();
	this.tampoAppearance.apply();
	this.scene.translate(1.0,0,0);
	this.scene.scale(0.5,0.2,0.2);
	this.scene.rotate(-Math.PI/2,0,1,0);
	this.scene.rotate(this.angleRoda2,0,0,1);
	this.tampoRoda2.display();
	this.scene.popMatrix();


};


MyRobot.prototype.setHand = function() {
	this.handMov = 1;
}

MyRobot.prototype.update = function(currTime) {

if (this.lastUpdate == -1)
        this.lastUpdate = currTime;
        var diff = currTime - this.lastUpdate;
 
        if (this.handMov != 0)
        {
                if (this.xRotTemp == 999 && this.zRotTemp == 999)
                {
                        this.xRotTemp = -this.rotArm;
                        this.zRotTemp = 0;
                }
                else if (this.xRotTemp <= -165 && this.iteracoes != 4)
                {
                        if (this.zRotTemp > -20 && this.iteracoes == 0)
                                this.zRotTemp -= diff * (360 / (60 * 100));
                        else if (this.zRotTemp < 0 && this.iteracoes == 1)
                        {
                                this.iteracoes = 1;
                                this.zRotTemp += diff * (360 / (60 * 100));
                        }
                        else if (this.zRotTemp < 0 && this.iteracoes == 0)
                                this.iteracoes = 1;
                        else
                        {
                                this.handMov++;
                                this.iteracoes = 0;
                                if (this.handMov == 4)
                                        this.iteracoes = 4;
                        }
                }
                else if (this.iteracoes != 4)
                        this.xRotTemp -= diff * (360 / (60 * 50));
                else
                {
                        if (-this.rotArm + 10 > this.xRotTemp && -this.rotArm - 10 < this.xRotTemp)
                        {
                                this.handMov = 0;
                                this.xRotTemp = 999;
                                this.zRotTemp = 999;
                                this.iteracoes = 0;
                        }
                        else
                                this.xRotTemp += diff * (360 / (60 * 50));
                }
        }
        this.lastUpdate = currTime;
 
 
};