/**
 * MyCylinder
 * @constructor
 */
 function MyCylinder(scene, slices, stacks) {
        CGFobject.call(this,scene);
       
        this.slices=slices;
        this.stacks=stacks;
 
        this.initBuffers();
 };
 
 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;
 
 MyCylinder.prototype.initBuffers = function() {
 
 
        this.vertices = [];
 
        this.indices = [];
 
        this.normals = [];
        this.texCoords = [];
       
    var ang = 360 / this.slices;
    var agrad = (ang*Math.PI)/180;
    var indice = 0;
 
        for(var k = 0; k <= this.slices; ++k){
        for(var i =0 ; i <= this.stacks ; ++i){
                this.vertices.push(Math.cos(agrad*k), Math.sin(agrad*k), i/this.stacks);
                this.vertices.push(Math.cos(agrad*(k+1)), Math.sin(agrad*(k+1)), i/this.stacks);
 
                if(k != 0){
                     this.indices.push(0+(indice*2), 1+(indice*2), 2+(indice*2));
                     this.indices.push(1+(indice*2), 3+(indice*2), 2+(indice*2));
                     indice++;
                }
 
                this.normals.push(Math.cos(agrad*k), Math.sin(agrad*k), 0);
                this.normals.push(Math.cos(agrad*(k+1)), Math.sin(agrad*(k+1)), 0);
              this.texCoords.push(k/this.slices, (this.stacks-i)/this.stacks);              
              this.texCoords.push((k+1)/this.slices, (this.stacks-i)/this.stacks);
      
        }
        }
       
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
 };