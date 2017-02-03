function MyPaperPlane(scene,x,y) {
 	CGFobject.call(this,scene);

	this.posicaoX = x;
	this.posicaoY = y;


    this.asa1= new MyWings(scene);
  	this.asa2 = new MyWings(scene);

    this.base1 = new MyWings(scene);
    this.base2 = new MyWings(scene);


	this.branco = new CGFappearance(this.scene);
	this.branco.setAmbient(0.3,0.3,0.3,1);
	this.branco.setDiffuse(1,1,1,1);
	this.branco.setSpecular(1,1,1,1);
	this.branco.setShininess(120);
 	
 };


 MyPaperPlane
.prototype = Object.create(CGFobject.prototype);
 MyPaperPlane
.prototype.constructor = MyPaperPlane
;

MyPaperPlane.prototype.display = function() {
    //asa1
    this.scene.pushMatrix();
	this.branco.apply();
	//this.scene.translate(15, 5, 9);
	this.asa1.display();
	this.scene.popMatrix();


	//asa2

	this.scene.pushMatrix();
	this.branco.apply();
	this.scene.rotate(Math.PI, 1,0,0);
	//this.scene.translate(15, 5, 9);
	this.asa2.display();
	this.scene.popMatrix();

	//basa1
	this.scene.pushMatrix();
	this.branco.apply();
	this.scene.rotate(Math.PI/2, 1,0,0);
	//this.scene.translate(15, 5, 9);
	this.base1.display();
	this.scene.popMatrix();

 };

MyPaperPlane.prototype.update = function(currTime) {
    
    while(posicaoX >0){
    	posicaoX--;
    }
};