var fondo;
var medusa1;
var caballodemar;
var pezlampara;
var plancton;
var pulpo;
var dory;
var nemo;
var miCancion;
var miCancion1;

var miMedusa = [];
var miCaballodemar = [];
var miPezlamára = [];
var miPlancton  = [];
var miPulpo  = [];
var miDory  = [];
var miNemo  = [];


function preload(){
fondo = loadImage('assets/fondo.jpg');
  medusa1 = loadImage('assets/medusa1.png');
 caballodemar = loadImage('assets/caballodemar.png');
pezlampara= loadImage('assets/pezlampara.png');
  plancton = loadImage('assets/plancton.png');
pulpo = loadImage('assets/pulpo1.png');
dory = loadImage('assets/dory.png');
nemo = loadImage('assets/nemo.png');
miCancion = loadSound('assets/nemoydory.mp4');
miCancion1 = loadSound('assets/burbujas.mp4'); 

  
}
function setup() {
  createCanvas(800, 600);
   miCancion1.play();
   //miCancion1.play();
}

function draw() {
  
    background(220);
  
   
  
  image(fondo,0,0,800,600);
  
  
  
   if (frameCount % 300 == 0) {
    miMedusa[miMedusa.length] = new animales1(random(500, 600),
      random(500, 600)); }
     
     for (var i = 0; i < miMedusa.length; i = i + 1) {
    miMedusa[i].dibujarse();
    miMedusa[i].moverse();
  
   if (miMedusa[i].edad > 400) {
    miMedusa[i].morirse();
  }
     }   
  if (frameCount % 400 == 0) {
  miCaballodemar[miCaballodemar.length] = new animales2 (random(50, width),
  random(200, height));
  }
       for (var i = 0; i < miCaballodemar.length; i = i + 1) {
    miCaballodemar[i].dibujarse();
    miCaballodemar[i].moverse();
  
   //if (miCaballodemar[i].edad > 500) {
   // miCaballodemar[i].morirse();
  //}
   }
  if (frameCount % 80 == 0) {
  miPlancton[miPlancton.length] = new animales3 (random(600, 600),
  random(600, 600));
  }
       for (var i = 0; i < miPlancton.length; i = i + 1) {
    miPlancton[i].dibujarse();
    miPlancton[i].moverse();
  
   if (miPlancton[i].edad > 500) {
    miPlancton[i].morirse();
  }
   }
  
   if (frameCount % 80 == 0) {
  miDory[miDory.length] = new animales (random(200, 200),
  random(200, 200));
  }
       for (var i = 0; i < miDory.length; i = i + 1) {
    miDory[i].dibujarse();
    miDory[i].moverse();
  
   if (miDory[i].edad > 500) {
    miDory[i].morirse();
     
  if(dist(mouseX,mouseY,200,200)< 50){
  background(220);
} else{
   image(fondo,0,0,800,600);
}
  }
  }
   

  
  
    if(mouseIsPressed == true){
    //misAbejas[misAbejas.length] = new abeja(mouseX, mouseY);
  }
  for( var i = 0 ; i < miPulpo. length; i = i +1){
    miPulpo[i].dibujarse();
    miPulpo[i].moverse();
    if(miPulpo[i].edad > 200){
    miPulpo[i].morirse();
    }
   }
 // maya.dibujarse();
 // maya.moverse();
 // if(maya.edad > 200){
    //maya.morirse();}
//}
}
 function mousepreassed(){}
function mouseReleased(){
   miPulpo[miPulpo.length] = new pulpito(mouseX, mouseY);}
  
function pulpito(miX, miY) {
  this.x = miX;
  this.y = miY;
  this.tam = 20 ;
  this.edad =0;
  this.estaViva=true;
  
  
  this.dibujarse = function(){
    if(this.estaViva== true){
  
  
  // image(pulpo, this.x, this.y, 60,60);}
        image(pulpo,this.x, this.y, 300,200);}
};

 this.moverse = function(){
   this.x = this.x+random(1,1);
   this.y = this.y+ random (1,1);
   this.edad = this.edad+1;
 };
 
 this.morirse = function(){
   this.estaViva = false;
 };


 
      
  }
  function animales1(miX, miY) {
  // caracteristicas
  this.x = miX/2;
  this.y = miY/2;
  this.tam = 1;
  this.edad = 0;
  this.estaViva = true;
  //habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(medusa1, this.x, this.y, 150,150)
    }
    };
    
  this.moverse = function() {
    this.x = this.x + random(+1);
    //this.y = this.y + random (0;
    this.edad = this.edad + 1;
  };
  this.morirse = function() {
    this.estaViva = false;
  };
 }
  
function animales2(miX, miY) {
  // caracteristicas
  this.x = miX/2;
  this.y = miY/2;
  this.tam = 1;
  this.edad = 0;
  this.estaViva = true;
  //habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(caballodemar, this.x, this.y, 60,60)
    }
  };
  this.moverse = function() {
    //this.x = this.x + random(+1);
    this.y = this.y + random (+1);
    this.edad = this.edad + 1;
  };
  //this.morirse = function() {
    //this.estaViva = false;
  //};

}
function animales3(miX, miY) {
  // caracteristicas
  this.x = miX/2;
  this.y = miY/2;
  this.tam = 1;
  this.edad = 0;
  this.estaViva = true;
  //habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(plancton, this.x, this.y, 40,40)
    }
  };
  this.moverse = function() {
    this.x = this.x + random(-1);
    this.y = this.y + random (+1);
    this.edad = this.edad + 1;
  };
  this.morirse = function() {
    this.estaViva = false;
  };
}
function animales(miX, miY) {
  // caracteristicas
  this.x = miX/2;
  this.y = miY/2;
  this.tam = 1;
  this.edad = 0;
  this.estaViva = true;
  //habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      
      image(dory, this.x, this.y, 40,40)
    }
  };
  this.moverse = function() {
    this.x = this.x + random(+1);
    //this.y = this.y + random (+1);
    this.edad = this.edad + 1;
  };
  this.morirse = function() {
    this.estaViva = false;
  };

//function animales4(miX, miY) {
  // caracteristicas
 // this.x = miX/2;
  //this.y = miY/2;
  //this.tam = 1;
  //this.edad = 0;
  //this.estaViva = true;
  //habilidades
  //this.dibujarse = function() {
    //if (this.estaViva == true) {
      //image(pulpo, this.x, this.y, 250,250)
    //}
  //};
  //this.moverse = function() {
    //this.x = this.x + random(-1);
    //this.y = this.y + random (+1);
    //this.edad = this.edad + 1;
  //};
  //this.morirse = function() {
    //this.estaViva = false;
  



}