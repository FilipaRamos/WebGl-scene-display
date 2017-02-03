function MyClock(scene, slices, stacks) {
 	CGFobject.call(this,scene);

	
	this.slices = slices;
	this.stacks = stacks;

    this.lateral= new MyPrism(this.scene,slices,stacks);
      this.lateral.initBuffers();
  	this.mostrador = new MyCircle(scene,12,30 );
  	  this.mostrador.initBuffers();

	this.segundos = new MyClockHand(this.scene);
	    this.segundos.initBuffers();
	this.minutos = new MyClockHand(this.scene);
	    this.minutos.initBuffers();
	this.horas = new MyClockHand(this.scene);
	    this.horas.initBuffers();
/*
	this.minutos.setAngle(180);
	this.horas.setAngle(90);
	this.segundos.setAngle(270);
*/
	this.minutos.setAngle(0);
	this.horas.setAngle(0);
	this.segundos.setAngle(0);


 	this.clockAppearance = new CGFappearance(this.scene);
	this.clockAppearance.loadTexture('../resources/images/clock.png');
	this.clockAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.clockAppearance.setSpecular(0, 0, 0, 1);
	this.clockAppearance.setShininess(10);
	this.clockAppearance.setDiffuse(0.4,0.4, 0.4, 1);


	this.vermelho = new CGFappearance(this.scene);
	this.vermelho.setAmbient(1,1,1,1);
	this.vermelho.setDiffuse(1,0,0,1);
	this.vermelho.setSpecular(1,1,1,1);
	this.vermelho.setShininess(120);

	this.preto = new CGFappearance(this.scene);
	this.preto.setAmbient(0.3,0.3,0.3,1);
	this.preto.setDiffuse(0,0,0,1);
	this.preto.setSpecular(1,1,1,1);
	this.preto.setShininess(120);
 	
 };


 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

MyClock.prototype.display = function() {

	//Lateral do relogio
  	this.scene.pushMatrix();
	//this.scene.scale(0.5,0.5,0.25);
	this.lateral.display();
	this.scene.popMatrix();

	//Mostrador
	this.scene.pushMatrix();
	//this.scene.scale(0.5,0.5,0.25);
	this.clockAppearance.apply();
	this.mostrador.display();
	this.scene.popMatrix();
	

	//horas
	this.scene.pushMatrix();
	this.scene.rotate(-(this.horas.angle*2*Math.PI)/360, 0,0,1);
	this.scene.scale(1,0.3,1);
	this.preto.apply();
	this.horas.display();
	this.scene.popMatrix();

	//minutos
	this.scene.pushMatrix();
	this.scene.rotate(-(this.minutos.angle*2*Math.PI)/360, 0,0,1);
	this.scene.scale(1,0.5,1);
	this.preto.apply();
	this.minutos.display();
	this.scene.popMatrix();

	//segundos
	this.scene.pushMatrix();
	this.vermelho.apply();
	this.scene.rotate(-(this.segundos.angle*2*Math.PI)/360, 0,0,1);
	this.scene.scale(1,0.6,1);
	this.segundos.display();
	this.scene.popMatrix();

 };

MyClock.prototype.update = function(currTime) {

	var new_segundos = (currTime/1000)%60;
	var new_minutos = (currTime/(1000*60))%60;
	var new_horas = ((currTime/(1000*60*60))%12)+1; 

	//CONVERTER DE SEGUNDOS PARA GRAUS: 2*PI - 360 ESTA PARA 60 SEGUNDOS ASSIM COMO CENAS ESTA PARA COISO!

		new_segundos = Math.floor(new_segundos);

		new_segundos = (new_segundos*360)/60;
		this.segundos.setAngle(new_segundos);

	//CONVERTER DE MINUTOS PARA GRAUS: 2*PI - 360 ESTA PARA 60 MINUTOS ASSIM COMO CENAS ESTA PARA COISO!

		new_minutos = (new_minutos*360)/60;
		this.minutos.setAngle(new_minutos);

	//CONVERTER DE HORAS PARA GRAUS: 2*PI - 360 ESTA PARA 12 HORAS ASSIM COMO CENAS ESTA PARA COISO!

		new_horas = (new_horas*360)/12; 
		this.horas.setAngle(new_horas);
	  
};