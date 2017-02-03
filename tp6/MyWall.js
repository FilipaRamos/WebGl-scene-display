/**
 * MyWall
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
 
function MyWall(scene) {
   CGFobject.call(this,scene);
 
   this.wall1 = new MyQuad(scene, -0.5, 0.03, -0.50, 1.50);//esquerda
   this.wall2 = new MyQuad(scene, 0.07, 0.95,  -0.5, 0.33); //cima
   this.wall3 = new MyQuad(scene, 0.07, 0.95,  0.94, 1.55);//baixo
   this.wall4 = new MyQuad(scene, 0.97, 1.5, -0.50, 1.50); //direita
	
   this.initBuffers();
};
 
 
MyWall.prototype = Object.create(CGFobject.prototype);
MyWall.prototype.constructor=MyWall;
 
MyWall.prototype.display = function() {
   
    this.scene.pushMatrix();
    this.scene.translate(-0.33,0,0);
    this.scene.scale(0.33,0.99,0.2);
    this.wall1.display();
    this.scene.popMatrix();
 
    this.scene.pushMatrix();
    this.scene.translate(0,0.29,0);
    this.scene.scale(0.33,0.41,0.2);
    this.wall2.display();
    this.scene.popMatrix();
 
    this.scene.pushMatrix();
    this.scene.translate(0,-0.365,0);
    this.scene.scale(0.33,0.29,0.2);
    this.wall3.display();
    this.scene.popMatrix();
 
    this.scene.pushMatrix();
    this.scene.translate(0.33,0,0);
    this.scene.scale(0.33,0.99,0.2);
    this.wall4.display();
    this.scene.popMatrix();
};
 
 
MyWall.prototype.initBuffers = function () {
        this.vertices = [
            -0.5, -0.5, 0,
            0.5, -0.5, 0,
            -0.5, 0.5, 0,
            0.5, 0.5, 0
                        ];
 
        this.indices = [
            0, 1, 2,
                        3, 2, 1,
        ];
        
               
        this.primitiveType=this.scene.gl.TRIANGLES;
 
    this.normals = [ 0, 0, 1,
                     0, 0, 1,
                     0, 0, 1,
                     0, 0, 1 ];
 
 
    this.texCoords = [
   
                this.minS, this.maxT,
                this.maxS, this.maxT,
                this.minS, this.minT,
                this.maxS, this.minT
                ];
 
        this.initGLBuffers();
       
};