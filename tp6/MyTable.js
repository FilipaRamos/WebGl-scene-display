/**
 * MyTable
 * @constructor
 */

/*
function MyTable(scene) {
	CGFobject.call(this,scene);
	this.table=new MyUnitCubeQuad(this.scene);

};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor= MyTable;


MyTable.prototype.display = function () {
        
        var movfloorz = 1.25;
        var movfloorx = 1;
        var movperna1z = 0.5;
        var movperna1x = 1;
        var movperna2z = 2.5;
        var movperna2x = 4;

 
        this.scene.pushMatrix();
        this.scene.translate(2.5+movfloorx,3.7,1.5+movfloorz);
        this.scene.scale(5,0.3,3);
        this.table.display();
        this.scene.popMatrix();
      	this.scene.pushMatrix();
      	this.scene.translate(movperna1x+movfloorx,1.8,movperna1z+movfloorz);
      	this.scene.scale(0.3,3.5,0.3);
      	this.table.display();
      	this.scene.popMatrix();
      	this.scene.pushMatrix();
      	this.scene.translate(movperna2x+movfloorx,1.8,movperna2z+movfloorz);
        this.scene.scale(0.3,3.5,0.3);
        this.table.display();
        this.scene.popMatrix();
      	this.scene.pushMatrix();
      	this.scene.translate(movperna2x+movfloorx,1.8,movperna1z+movfloorz);
        this.scene.scale(0.3,3.5,0.3);
        this.table.display();
        this.scene.popMatrix();
      	this.scene.pushMatrix();
      	this.scene.translate(movperna1x+movfloorx,1.8,movperna2z+movfloorz);
      	this.scene.scale(0.3,3.5,0.3);
      	this.table.display();
}

 */

 
 function MyTable(scene) {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();


 	this.tableAppearance = new CGFappearance(this.scene);
 	this.tableAppearance.setAmbient(0.3,0.3,0.3,1);
 	this.tableAppearance.setSpecular(0.5,0.3,0.07,1);
 	this.tableAppearance.setDiffuse(0.5,0.3,0.07,1);
 	this.tableAppearance.setShininess(120);
 	this.tableAppearance.loadTexture("../resources/images/table.png");

 	this.metal = new CGFappearance(this.scene);
 	this.metal.setAmbient(0.3,0.3,0.3,1);
	this.metal.setSpecular(1,1,1,1);
 	this.metal.setDiffuse(0.99,0.99,0.99,1);
 	this.metal.setShininess(120);


 };

 MyTable.prototype = Object.create(CGFobject.prototype);
 MyTable.prototype.constructor = MyTable;

 MyTable.prototype.display = function() {


 	// legs
 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
	this.scene.setSpecular(1,1,1,1);
 	this.scene.setDiffuse(0.99,0.99,0.99,1);
 	this.metal.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
	//this.scene.setSpecular(1,1,1,1);
 	//this.scene.setDiffuse(0.99,0.99,0.99,1);
 	this.metal.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
	//this.scene.setSpecular(1,1,1,1);
	//this.scene.setDiffuse(0.99,0.99,0.99,1);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
	//this.scene.setSpecular(1,1,1,1);
	//this.scene.setDiffuse(0.99,0.99,0.99,1);
	this.metal.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	// table top
 	this.scene.pushMatrix();
 	this.scene.translate(0, 3.5, 0);
 	this.scene.scale(5, 0.3, 3);
	//this.scene.setSpecular(0,0,0.05,1);
 	//this.scene.setDiffuse(0.5,0.3,0.07,1);
 	this.tableAppearance.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();
 }
