function MyBench(scene, slices, stacks) {
 	CGFobject.call(this, scene);

 	this.myBench = new MyCylinder(this.scene,50,9);
 	this.back = new MyUnitCubeQuad(this.scene);
 	this.tampo = new MyCircle(this.scene,50,7.2);

 	this.black = new CGFappearance(this.scene);
	this.black.loadTexture('../resources/images/black.png');
	this.black.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.black.setSpecular(0, 0, 0, 1);
	this.black.setShininess(10);
	this.black.setDiffuse(0.4,0.4, 0.4, 1);

	this.pink = new CGFappearance(this.scene);
	this.pink.loadTexture('../resources/images/pink.png');
	this.pink.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	this.pink.setSpecular(0, 0, 0, 1);
	this.pink.setShininess(10);
	this.pink.setDiffuse(0.4,0.4, 0.4, 1);

 };

 MyBench.prototype = Object.create(CGFobject.prototype);
 MyBench.prototype.constructor = MyBench;

 MyBench.prototype.display = function() {

//cilindro
    this.scene.pushMatrix();
	this.scene.scale(1,2,1);
	this.scene.rotate(-Math.PI/2, 1,0,0);
	this.pink.apply();
	this.myBench.display();
	this.scene.popMatrix();

//tampo
    this.scene.pushMatrix();
	this.scene.translate(0,2,0);
	this.scene.scale(1,0,1);
	this.scene.rotate(-Math.PI/2, 1,0,0);
	this.pink.apply();
	this.tampo.display();
	this.scene.popMatrix();

//costas
	this.scene.pushMatrix();
 	this.scene.translate(0, 2, 1);
 	this.scene.rotate(-Math.PI/2, 1,0,0);
 	this.scene.scale(2, 0.3, 4);
	this.black.apply();
 	this.back.display();
 	this.scene.popMatrix();
 }