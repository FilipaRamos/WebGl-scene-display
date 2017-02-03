
function MyCircle(scene, slices, teta) {
	CGFobject.call(this,scene);

	this.slices = slices;
	this.teta = teta;

	this.initBuffers();
};

MyCircle.prototype = Object.create(CGFobject.prototype);
MyCircle.prototype.constructor=MyCircle;

 
MyCircle.prototype.initBuffers = function () {
 
        // a e b sao o centro
        var a = 0;
        var b = 0;
       
        //coordenadas
        var z =1.0;
 
        //angulo
 
        var teta = this.teta;  //angulos
        var angulo = 0.0; //radianos
 
 
        //raio
 
        var r = 1.0;
       
        this.vertices = [];
        this.normals = [];
        this.indices = [];
        this.texCoords = [];
	

          // adicionar o centro
      
       this.vertices.push(a);
       this.vertices.push(b);
       this.vertices.push(z);
       this.normals.push(0,0,1);
	   this.texCoords.push(0.5,0.5);

	   
        while(angulo <= 2*Math.PI+0.1){
                this.vertices.push(a+r*Math.cos(angulo));
                this.vertices.push(b+r*Math.sin(angulo));
                this.vertices.push(z);  
                this.normals.push(0,0,1);
 				this.texCoords.push(0.5*Math.cos(angulo) + 0.5,0.5 - (0.5*Math.sin(angulo)));
                angulo = angulo + (teta*2*Math.PI)/360;
        }
       
      
 
        var tamanho = (this.vertices.length -1);
        
        for(var i=1;i <= this.slices ; i++){
           this.indices.push(i);
           this.indices.push(i+1); 
            this.indices.push( 0 );        
        }      
 
               
        this.primitiveType=this.scene.gl.TRIANGLES;
        this.initGLBuffers();
};
