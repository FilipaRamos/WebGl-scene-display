/**
 * MyWings
 * @constructor
 */
 
function MyWings(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyWings.prototype = Object.create(CGFobject.prototype);
MyWings.prototype.constructor=MyWings;

 
MyWings.prototype.initBuffers = function () {

       
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        this.vertices.push(-0.25,0,0); //0
        this.vertices.push(0.5,0,0);  //1
        this.vertices.push(0.5,0,0.25);  //2
  

        this.indices.push(2,1,0);
        this.indices.push(0,1,2);

       this.normals.push(0,0,1);   
       this.normals.push(0,0,1);    
       this.normals.push(0,0,1);                
               
        this.primitiveType=this.scene.gl.TRIANGLES;
        this.initGLBuffers();
};


MyWings.prototype.setAngle = function(angle) {
	this.angle = angle;
};