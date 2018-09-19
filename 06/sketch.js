var miFotico;
var miFotico1;
var miFotico2;
var miFotico3;
var miFotico4;
var miFotico5;
var miFotico6;
var miFotico7;
var miFotico8;
var miFotico9;
var miFotico10;
var miFotico11;
var miFotico12;

var miCancion;
var miAmplitud;
var y = 0;
var y1 = 0;
var x3 = 100,
  y3 = 100,
  angle1 = 0.0,
  segLength = 50;


function preload() {
miFotico = loadImage('assets/MUJER.jpg'); 
miFotico1 = loadImage('assets/LABIOS 2.png'); 
miFotico2 = loadImage('assets/NOTA MUSICAL.png');
miFotico3 = loadImage('assets/PLAY.png');
miFotico4 = loadImage('assets/blah1.jpg');
miFotico5 = loadImage('assets/ya.png');
miFotico6= loadImage('assets/aa.png');
miFotico7= loadImage('assets/cassette.png');
miFotico8= loadImage('assets/fondo.jpg'); 
miFotico9= loadImage('assets/piano4.jpg');   
miFotico10= loadImage('assets/pestaña.png');
  miFotico11= loadImage('assets/puntos.jpg');
  miFotico12= loadImage('assets/CEREZA.png');
  
miCancion = loadSound('assets/blah.mp3');
 } 
function setup() {
createCanvas(500,800);
miCancion.play();
miAmplitud = new p5.Amplitude();
miAmplitud.setInput(miCancion);
  
  
  
 
}

function draw() {
  background(0);
  
  var miVol = map (mouseY,height,0,0,1);
  miCancion.setVolume(miVol);
  
  var miPan = map(mouseX,0, width,-1,1);
  miCancion.pan(miPan);
  
 if(miCancion.currentTime() > 6.6 && miCancion.currentTime() < 9.5)
  image(miFotico5,80,100,120,120); 

  
   if(miCancion.currentTime() > 6.6 && miCancion.currentTime() < 9.5)
  image(miFotico5,50,300,120,120); 
 

     if(miCancion.currentTime() > 6.6 && miCancion.currentTime() < 9.5)
  image(miFotico5,200,500,120,120); 
  
   if(miCancion.currentTime() > 6.6 && miCancion.currentTime() < 9.5)
  image(miFotico6,110,100,120,120); 

  
   if(miCancion.currentTime() > 6.6 && miCancion.currentTime() < 9.5)
  image(miFotico6,90,300,120,120); 
 

     if(miCancion.currentTime() > 6.6 && miCancion.currentTime() < 9.5)
  image(miFotico6,240,500,120,120); 
 
  
  
 if(miCancion.currentTime() > 8 && miCancion.currentTime() < 10)
  image(miFotico4,80,100,350,120); 

  
   if(miCancion.currentTime() > 8 && miCancion.currentTime() < 10)
  image(miFotico4,50,300,350,150); 
 

     if(miCancion.currentTime() > 8 && miCancion.currentTime() < 10)
  image(miFotico4,200,500,350,150); 
  
  
   if(miCancion.currentTime() > 10.5 && miCancion.currentTime() < 20.3)
  image(miFotico7,50,300,400,265); 
  
  if(miCancion.currentTime() > 10.5 && miCancion.currentTime() < 20.3)
  fill(random (255), random(255),random(255));
  if(miCancion.currentTime() > 10.5 && miCancion.currentTime() < 20.3)
  ellipse( 167,422 , 52, 40);
  
   if(miCancion.currentTime() > 10.5 && miCancion.currentTime() < 20.3)
  fill(random (255), random(255),random(255));
  if(miCancion.currentTime() > 10.5 && miCancion.currentTime() < 20.3)
  ellipse( 336,422 , 52, 40);
  
 
   if(miCancion.currentTime() > 20.5 && miCancion.currentTime() < 21.9)
  image(miFotico5,80,100,120,120); 

  
   if(miCancion.currentTime() > 20.5 && miCancion.currentTime() < 21.9)
  image(miFotico5,50,300,120,120); 
 

     if(miCancion.currentTime() > 20.5 && miCancion.currentTime() < 21.9)
  image(miFotico5,200,500,120,120); 
  
   if(miCancion.currentTime() > 20.5 && miCancion.currentTime() < 21.9)
  image(miFotico6,110,100,120,120); 

  
   if(miCancion.currentTime() > 20.5 && miCancion.currentTime() < 21.9)
  image(miFotico6,90,300,120,120); 
 

     if(miCancion.currentTime() > 20.5 && miCancion.currentTime() < 21.9)
  image(miFotico6,240,500,120,120); 
 
  
  
 if(miCancion.currentTime() > 22 && miCancion.currentTime() < 23.9)
  image(miFotico4,80,100,350,120); 

  
   if(miCancion.currentTime() > 22 && miCancion.currentTime() < 23.9)
  image(miFotico4,50,300,350,150); 
 

     if(miCancion.currentTime() > 22 && miCancion.currentTime() < 23.9)
  image(miFotico4,200,500,350,150); 
 
   
  
 // if(miCancion.currentTime() > 8.10)
  //background(0);
  
  
  if(miCancion.currentTime() > 24)
  image(miFotico3,10,300,50,50); 
  if(miCancion.currentTime() > 40)
 for (var i = 0; i < 100; i++) {
  var r = random(50);
  stroke(r * 5);
  image(miFotico3,10,300+r,50,50);
}

 if(miCancion.currentTime() > 28)
image(miFotico3,70,300,70,70);
  if(miCancion.currentTime() > 40)
  for (var i = 0; i < 100; i++) {
  var r = random(50);
  stroke(r * 5);
  image(miFotico3,70,300+r,70,70);
}

  
  //if(miCancion.currentTime() > 20)
  if(miCancion.currentTime() > 31)
 image(miFotico3,150,300,90,90);
  if(miCancion.currentTime() > 40)
  for (var i = 0; i < 100; i++) {
  var r = random(50);
  stroke(r * 5);
  image(miFotico3,150,300+r,90,90);
}

  
  if(miCancion.currentTime() > 35)
 image(miFotico3,240,300,120,120);
  if(miCancion.currentTime() > 40)
  for (var i = 0; i < 100; i++) {
  var r = random(50);
  stroke(r * 5);
  image(miFotico3,240,300+r,120,120);
}
  
  if(miCancion.currentTime() > 38)
 image(miFotico3,350,300,150,150);
  if(miCancion.currentTime() > 40)
  for (var i = 0; i < 100; i++) {
  var r = random(50);
  stroke(r * 5);
  image(miFotico3,350,300+r,150,150);
}
// if(miCancion.currentTime() > 15)
  //image(miFotico3,350,300,150,150); 
  
  
  // if(miCancion.currentTime() > 15)
  //image(miFotico3,350,300,150,150); 

    
  if(miCancion.currentTime() > 52)
  
  image(miFotico,0,0,500,800);

  
  
   var miTamano = map(miAmplitud.getLevel(), 0, 1, 0, 400);
  if(miCancion.currentTime() > 52)
    
  
  if(miCancion.currentTime() > 52)
  image (miFotico1,170,375,185,185);
  
  
    
  push();
  
  if(miCancion.currentTime() > 52)
  image(miFotico1,170,375,185,185);
  if(miTamano > 200){
    for(var i = 0; i < 52; i = i + 1){
      var posX = random(0,width);
      var posY = random(0,height);
     
  if(miCancion.currentTime() > 52)
    image(miFotico1,170,375,185,185);
   }
    
    if(miCancion.currentTime() > 52)
  image(miFotico1,170,375,185,185);
  
 
  fill(random (255), random(255),random(255));  
  
  ellipse( 249, y, 20, 20);
  y = y+2;
    
  
 
  fill(random (255), random(255),random(255));  
  ellipse( 98, y, 20, 20);
  y = y+2;
    
  
  fill(random (255), random(255),random(255));  
  ellipse( 400, y, 20, 20);
  y = y+2;
    
    
if(miCancion.currentTime() > 68)
   image(miFotico10,88,212,115,50);
    
if(miCancion.currentTime() > 67)
image(miFotico10,305,212,115,50);
    
     
if(miCancion.currentTime() > 81)
   image(miFotico8,0,0,500,800);
    
     
if(miCancion.currentTime() > 95)
   image(miFotico11,0,0,500,800);
    
  pop();
    }
      
    else 
 {
 fill(0, 0, 0)
}
if(miCancion.currentTime() > 109)  
rect(0, 0, 500, 800);
    
  
  
if(miCancion.currentTime() > 112){  
 image(miFotico9,0,0,500,800); }

if(miCancion.currentTime() > 113){   
image(miFotico2,20,y1,50,80);
y1 = y1+0.9;
  
image(miFotico2,100,y1,50,80);
y1 = y1+0.5
  
image(miFotico2,200,y1,50,80);
y1 = y1+0.9;
  
  image(miFotico2,300,y1,50,80);
y1 = y1+0.5;
 
    image(miFotico2,400,y1,50,80);
y1 = y1+0.9;
 
    image(miFotico2,500,y1,50,80);
y1 = y1+0.5;
 
}

{
  //background(0);
  if(miCancion.currentTime() > 115){  
  dx = mouseX - x3;
  dy = mouseY - y3;
  angle1 = atan2(dy, dx);
  x3 = mouseX - (cos(angle1) * segLength);
  y3 = mouseY - (sin(angle1) * segLength);

  segment(x3, y3, angle1);
    
 image(miFotico2,x3,y3,50,80)
 // ellipse(x3, y3, 20, 20);
}

function segment(x3, y3, a) {
  push();
  translate(x3, y3);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
}
  if(miCancion.currentTime() > 140)  
rect(0, 0, 500, 800);
  
  if(miCancion.currentTime() > 142) { 
  var miTamano = map(miAmplitud.getLevel(), 0, 1, 0, 400);
 image(miFotico12,width/2, height/2, miTamano, miTamano)
 if(miTamano > 100){
    for(var i = 0; i < 400; i = i + 1){
     var posX = random(0,width);
     var posY = random(0,height);
    image(miFotico12,posX,posY,50,50);
   }
    }
    }
    

    
    
  
  
 // }
  
  ////if(miCancion.currentTime() > 6)
  //image (miFotico1,170,375,185,185);
  
  

     
 
}