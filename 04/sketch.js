var posXbot1 = 20;
var posYbot1 = 10;
var tambot1 = 40;

var ellipseXbot1 = 40;
var ellipseYbot1 = 30;
var ellipsetambot1 = 10;

var posXbot2 = 80;
var posYbot2 = 10;
var tambot2 = 40;

var ellipseXbot2=100;
var ellipseYbot2=30;
var ellipseXtambot2 =12;
var ellipseYtambot2=35;


var posXbot3 = 140;
var posYbot3 = 10;
var tambot3 = 40;

var ellipseXbot3=160;
var ellipseYbot3=30;
var ellipseXtambot3 =12;
var ellipseYtambot3=35;

var posXbot4= 200;
var posYbot4= 10;
var tambot4= 40;
var rectXbot4= 205;
var rectYbot4=15;
var rectXtam4=30;
var rectYtam4=20;

var posXbot5= 260;
var posYbot5= 10;
var tambot5= 40;
var ellipseXbot5=280
var ellipseYbot5=40
var ellipseXtambot5=20
var ellipseYtambot5=20

var posXbot6= 320;
var posYbot6= 10;
var tambot6= 40;
var rectXbot6=330;
var rectYbot6=15;
var rectXtam6=20;
var rectYtam6=40;

var posXbot1A=380;
var posYbot1A=10;
var tambot1A=40;
var triangleXbot1A=400


var posXbot2A=440
var posYbot2A=10
var tambot2A=40
var rectXbot2A=445;
var rectYbot2A=18;
var rectXtam2A=30;
var rectYtam2A=20;

var posXbot3A=500;
var posYbot3A=10;
var tambot3A=40;
var ellipseXbot3A=520;
var ellipseYbot3A=35;
var ellipseXtambot3A=25;


var posXbot4A=560
var posYbot4A=10
var tambot4A=40
var ellipseXbot4A=580;
var ellipseYbot4A=30;
var ellipseXtambot4A=20;

var posXbot5A=620
var posYbot5A=10
var tambot5A=40
var rectXbot5A=640;
var rectYbot5A=18;
var rectXtam5A=30;
var rectYtam5A=20;



var posXbot7= 20;
var posYbot7= 70;
var tambot7= 40;
var ellipseXbot7=40
var ellipseYbot7=90
var ellipseXtambot7=20
var ellipseYtambot7=20

var posXbot8= 20;
var posYbot8= 130;
var tambot8= 40;
var ellipseXbot8=40
var ellipseYbot8=150
var ellipseXtambot8=20
var ellipseYtambot8=20

var posXbot9= 20;
var posYbot9= 190;
var tambot9= 40;
var ellipseXbot9=40
var ellipseYbot9=210
var ellipseXtambot9=20
var ellipseYtambot9=20

var posXbot10= 20;
var posYbot10= 250;
var tambot10= 40;
var ellipseXbot10=40
var ellipseYbot10=270
var ellipseXtambot10=20
var ellipseYtambot10=20

var posXbot11= 20;
var posYbot11= 310;
var tambot11= 40;
var ellipseXbot11=40
var ellipseYbot11=330
var ellipseXtambot11=20
var ellipseYtambot11=20

var posXbot12= 20;
var posYbot12= 370;
var tambot12= 40;
var ellipseXbot12=40
var ellipseYbot12=390
var ellipseXtambot12=20
var ellipseYtambot12=20

var posXbot13= 20;
var posYbot13= 430;
var tambot13= 40;
var ellipseXbot13=40
var ellipseYbot13=450
var ellipseXtambot13=20
var ellipseYtambot13=20

var posXbot14= 20;
var posYbot14= 490;
var tambot14= 40;
var ellipseXbot14=40
var ellipseYbot14=510
var ellipseXtambot14=20
var ellipseYtambot14=20

var posXbot15= 20;
var posYbot15= 550;
var tambot15= 40;
var ellipseXbot15=40
var ellipseYbot15=570
var ellipseXtambot15=20
var ellipseYtambot15=20


var posXbot16= 20;
var posYbot16= 610;
var tambot16= 40;
var ellipseXbot16=40
var ellipseYbot16=630
var ellipseXtambot16=20
var ellipseYtambot16=20


var herramienta = 1
var colores = 1


function setup() {
createCanvas(windowWidth, windowHeight);
background(250,250,250);
}

function draw() {
stroke(204,255,255);
fill(204,255,255);
rect(posXbot1, posYbot1, tambot1, tambot1);
stroke (204,204,255);
fill(204,204,255);
ellipse(ellipseXbot1,ellipseYbot1,ellipsetambot1+30);
stroke (102,204,255);
fill(102,204,255);
ellipse(ellipseXbot1,ellipseYbot1,ellipsetambot1+20);
stroke (0,255,204);
fill(0,255,204);
ellipse(ellipseXbot1,ellipseYbot1,ellipsetambot1+10);
stroke(0,255,255);
fill(0,255,255);
ellipse(ellipseXbot1,ellipseYbot1,ellipsetambot1);

fill(255,204,0);
rect(posXbot2, posYbot2, tambot2, tambot2);
fill(204,255,0);
stroke(204,255,0);
ellipse(ellipseXbot2,ellipseYbot2,ellipseXtambot2,ellipseYtambot2);
ellipse(ellipseXbot2-9,ellipseYbot2,ellipseXtambot2+4,ellipseYtambot2-28);
ellipse(ellipseXbot2-14,ellipseYbot2-4,ellipseXtambot2-6,ellipseYtambot2-50);
ellipse(ellipseXbot2+9,ellipseYbot2+4,ellipseXtambot2+5,ellipseYtambot2-28);
ellipse(ellipseXbot2+14,ellipseYbot2-1,ellipseXtambot2-5,ellipseYtambot2-19);  

fill(211,154,244)
rect(posXbot3, posYbot3, tambot3, tambot3);
stroke(114,154,242)
fill(114,154,242)
ellipse(ellipseXbot3,ellipseYbot3,ellipseXtambot3,ellipseYtambot3);
stroke(114,154,242)
fill(114,154,242)
ellipse(ellipseXbot3,ellipseYbot3,ellipseXtambot3+24,ellipseYtambot3-22);
stroke(247,186,247)
fill(247,186,247)
ellipse(ellipseXbot3,ellipseYbot3,ellipseXtambot3+2,ellipseYtambot3-50);
stroke(0,0,0)
ellipse(ellipseXbot3,ellipseYbot3,ellipseXtambot3-50,ellipseYtambot3-40);
  
  
fill(3,252,239)
stroke(2,76,72)
rect(posXbot4, posYbot4, tambot4, tambot4);
fill(5,43,41)
rect( rectXbot4,rectYbot4,rectXtam4,rectXtam4-4);
fill(108,127,126)
rect( rectXbot4+5,rectYbot4+6,rectXtam4-10,rectXtam4-16);
  fill(5,43,41)
ellipse( rectXbot4+9,rectYbot4+12,rectXtam4-26,rectXtam4-26);
 fill(5,43,41)
ellipse( rectXbot4+22,rectYbot4+12,rectXtam4-26,rectXtam4-26);
fill(5,43,41)
rect( rectXbot4+13,rectYbot4+11,rectXtam4-26,rectXtam4-28);
fill(5,43,41)
rect( rectXbot4+9,rectYbot4+16,rectXtam4-18,rectXtam4-29);
  
fill(204,255,0)
stroke(74,91,4) 
rect(posXbot5, posYbot5, tambot5, tambot5);
  fill(250,250,250)
  ellipse( ellipseXbot5,ellipseYbot5,ellipseXtambot5,ellipseYtambot5);
  fill(250,250,250)
  ellipse( ellipseXbot5-3,ellipseYbot5-23,ellipseXtambot5-15,ellipseYtambot5-6);
fill(250,250,250)
  ellipse( ellipseXbot5+3,ellipseYbot5-23,ellipseXtambot5-15,ellipseYtambot5-6);
  fill(250,250,250)
  ellipse( ellipseXbot5,ellipseYbot5-15,ellipseXtambot5-6,ellipseYtambot5-6);
  fill(250,250,250)
  ellipse( ellipseXbot5,ellipseYbot5-1,ellipseXtambot5-15,ellipseYtambot5-15);
  
fill(252,113,8)
stroke(255,59,6)
rect(posXbot6, posYbot6, tambot6, tambot6);
fill(5,132,145)
rect( rectXbot6,rectYbot6+8,rectXtam6,rectXtam6+6);
fill(148,217,242)
triangle( rectXbot6,rectYbot6+8,340,11,350,23);
fill(148,217,242)
triangle( rectXbot6-8,rectYbot6+34,330,30,330,49);
fill(148,217,242)
triangle( rectXbot6+20,rectYbot6+34,350,30,360,49);
fill(148,217,242)
ellipse (340,35,10,10);
  
 fill(252,30,0)
stroke(255,30,0)
rect(posXbot1A, posYbot1A, tambot1A, tambot1A);
fill(255,255,0) 
triangle(triangleXbot1A,triangleXbot1A-390,triangleXbot1A-20,50,triangleXbot1A+20,50);
fill(255,153,0)
ellipse (392,38,10,10);
ellipse (408,38,10,10);
ellipse (400,25,10,10);
  
fill(0,102,255)
stroke(0,102,255)
rect(posXbot2A, posYbot2A, tambot2A, tambot2A);
fill(0,255,255) 
rect(rectXbot2A,rectYbot2A,rectXtam2A,rectYtam2A);
fill(255,153,0)
rect(rectXbot2A+5,rectYbot2A+5,rectXtam2A-10,rectYtam2A-10);
fill(0,0,0)
ellipse(448,40,12,12);
ellipse(470,40,12,12);
  
fill(255,51,102)
stroke (255,51,102)
rect(posXbot3A, posYbot3A, tambot3A, tambot3A);
fill(0,0,0) 
ellipse(ellipseXbot3A-10,ellipseYbot3A-15,ellipseXtambot3A-8);
ellipse(ellipseXbot3A+10,ellipseYbot3A-15,ellipseXtambot3A-8);
ellipse(ellipseXbot3A,ellipseYbot3A,ellipseXtambot3A);
  
fill(153,51,255)
stroke (153,51,255)
rect(posXbot4A, posYbot4A, tambot4A, tambot4A);
   fill(255,0,255)  
ellipse(ellipseXbot4A,ellipseYbot4A,ellipseXtambot4A+10); 
fill(255,153,255) 
ellipse(ellipseXbot4A,ellipseYbot4A,ellipseXtambot4A);

  
fill(255,255,153)
stroke (255,255,153)
rect(posXbot5A, posYbot5A, tambot5A, tambot5A);
fill(102,204,153)  
rect(posXbot5A+6, posYbot5A+3, tambot5A-10, tambot5A-10);
fill(102,204,0)   
rect(posXbot5A+11, posYbot5A+5, tambot5A-20, tambot5A-20);
  
  
 fill(193,193,193); 
rect(posXbot7, posYbot7, tambot7, tambot7);
  fill(255,3,87);  
ellipse( ellipseXbot7,ellipseYbot7,ellipseXtambot7,ellipseYtambot7);
  
  
fill(193,193,193); 
rect(posXbot8, posYbot8, tambot8, tambot8);
fill(217,3,255);
ellipse( ellipseXbot8,ellipseYbot8,ellipseXtambot8,ellipseYtambot8);
  
fill(193,193,193); 
rect(posXbot9, posYbot9, tambot9, tambot9);
fill(143,201,249);
  ellipse( ellipseXbot9,ellipseYbot9,ellipseXtambot9,ellipseYtambot9);
  
fill(193,193,193); 
rect(posXbot10, posYbot10, tambot10, tambot10);
  fill(123,239,206);
  ellipse( ellipseXbot10,ellipseYbot10,ellipseXtambot10,ellipseYtambot10);
  
fill(193,193,193); 
rect(posXbot11, posYbot11, tambot11, tambot11);
  fill(236,239,123);
  ellipse( ellipseXbot11,ellipseYbot11,ellipseXtambot11,ellipseYtambot11);
  
  fill(193,193,193); 
rect(posXbot12, posYbot12, tambot12, tambot12);
  fill(204,255,0);
  ellipse( ellipseXbot12,ellipseYbot12,ellipseXtambot12,ellipseYtambot12);
  
  fill(193,193,193); 
rect(posXbot13, posYbot13, tambot13, tambot13);
  fill(0,0,255);
  ellipse( ellipseXbot13,ellipseYbot13,ellipseXtambot13,ellipseYtambot13);
  
    fill(193,193,193); 
rect(posXbot14, posYbot14, tambot14, tambot14);
  fill(255,153,255);
  ellipse( ellipseXbot14,ellipseYbot14,ellipseXtambot14,ellipseYtambot14);
  
   fill(193,193,193); 
rect(posXbot15, posYbot15, tambot15, tambot15);
  fill(255,153,0);
  ellipse( ellipseXbot15,ellipseYbot15,ellipseXtambot15,ellipseYtambot15);
  
    fill(193,193,193); 
rect(posXbot16, posYbot16, tambot16, tambot16);
  fill(153,51,204);
  ellipse( ellipseXbot16,ellipseYbot16,ellipseXtambot16,ellipseYtambot16);

if (mouseIsPressed == true) {
  
 if (colores == 1){
 stroke(255,3,87);
 fill(255,3,87);
 }  
  
  if (colores == 2){
 fill (217,3,255);
 } 
  
   if (colores ==3 ){
 fill (143,201,249);
 } 
  
   if (colores == 4){
 fill (123,239,206);
 } 
  
   if (colores == 5){
 fill (236,239,123);
 } 
  
     if (colores == 6){
 fill (204,255,0);
 } 
  
     if (colores == 7){
 fill (0,0,255);
 }
  
  if (colores == 8){
 fill (255,153,255);
 } 

   if (colores == 9){
 fill (255,153,0);
 }
  
    if (colores == 10){
 fill (153,51,204);
 } 
  
 if (herramienta == 1) {
  ellipse(ellipse(pmouseX-2,pmouseY, mouseX, mouseY,line(pmouseX/2,pmouseY/5, mouseX, mouseY)));
 }

 if (herramienta == 2) {   
   //fill(252,3,117)
  ellipse(mouseX, mouseY, 30, 20);
 ellipse(mouseX, mouseY, 60, 10);
  
 }

   if (herramienta == 3) {
    triangle(mouseX+2, mouseY, 20, 20,50,50);
 }
  
     if (herramienta == 4) {
   textSize(16);
   textSize(RIGHT);
  text('FUNDAMENTOS 1', mouseX + 50, mouseY+ 30);
 }

if (herramienta == 5) {
    rect(mouseX+2,mouseY+5,30,20);
  triangle( mouseX+2,mouseY+5,340,11,350,23);
 }
  
 if (herramienta == 6) {
  triangle(mouseX,mouseY,30,20);
  triangle( mouseX+2,mouseY+5,340,11,350,23);
 } 
  
   if (herramienta == 7) {
  line(mouseX,mouseY,mouseX+2,mouseY+2);
  
 } 
  
  
     if (herramienta == 8) {
curve(mouseX+5, mouseY+26, mouseX+5,mouseY+ 26, mouseX+73, mouseY+24, mouseX+73,mouseY+ 61);
curve(mouseX+5, mouseY +26,mouseX+ 73, mouseY +24, mouseX+73,mouseY+ 61, mouseX+15,mouseY+ 65);
fill(255);
ellipseMode(CENTER);

 } 
  
if (herramienta == 9) {
ellipse(mouseX,mouseY,60)
fill(255,255,255)
ellipse(mouseX,mouseY,30)
 } 
 
  if (herramienta == 10) {
rect(mouseX,mouseY,60,60)
fill(255,215,0)
rect(mouseX,mouseY+2,30,30)
 } 
  
 if (mouseX > posXbot1 && mouseX < posXbot1 + tambot1 &&
  mouseY > posYbot1 && mouseY < posYbot1 + tambot1) {
  background(250, 250, 250);
 }

 if (mouseX > posXbot2 && mouseX < posXbot2 + tambot2 &&
  mouseY > posYbot2 && mouseY < posYbot2 + tambot2) {
  herramienta = 1;

 }


 if (mouseX > posXbot3 && mouseX < posXbot3 + tambot3 &&
  mouseY > posYbot3 && mouseY < posYbot3 + tambot3) {
  herramienta = 2;

 }
  
if (mouseX > posXbot4 && mouseX < posXbot4 + tambot4 &&
  mouseY > posYbot4 && mouseY < posYbot4 + tambot4) {
  herramienta = 3;
  
 }
  if (mouseX > posXbot5 && mouseX < posXbot5 + tambot5 &&
  mouseY > posYbot5 && mouseY < posYbot5 + tambot5) {
  herramienta = 4;
 
 }
  if (mouseX > posXbot6 && mouseX < posXbot6 + tambot6 &&
  mouseY > posYbot6 && mouseY < posYbot6 + tambot6) {
  herramienta = 5;
  
 }
  
   if (mouseX > posXbot1A && mouseX < posXbot1A + tambot1A &&
  mouseY > posYbot1A && mouseY < posYbot1A + tambot1A) {
  herramienta = 6;
  
 }
  
    if (mouseX > posXbot2A && mouseX < posXbot2A + tambot2A &&
  mouseY > posYbot2A && mouseY < posYbot2A + tambot2A) {
  herramienta = 7;
  
 }
  
      if (mouseX > posXbot3A && mouseX < posXbot3A + tambot3A &&
  mouseY > posYbot3A && mouseY < posYbot3A + tambot3A) {
  herramienta = 8;
  
 }
  
        if (mouseX > posXbot4A && mouseX < posXbot4A + tambot4A &&
  mouseY > posYbot4A && mouseY < posYbot4A + tambot4A) {
  herramienta = 9;
  
 }
  
        if (mouseX > posXbot5A && mouseX < posXbot5A + tambot5A &&
  mouseY > posYbot5A && mouseY < posYbot5A + tambot5A) {
  herramienta = 10;
  
 }
  
  if (mouseX > posXbot7 && mouseX < posXbot7 + tambot7 &&
  mouseY > posYbot1 && mouseY < posYbot7 + tambot7) {
  colores = 1;
 }
  
  if (mouseX > posXbot8 && mouseX < posXbot8 + tambot8 &&
  mouseY > posYbot8 && mouseY < posYbot8 + tambot8) {
  colores = 2;
    print(colores);
 }
  
  if (mouseX > posXbot9 && mouseX < posXbot9 + tambot9 &&
  mouseY > posYbot9 && mouseY < posYbot9 + tambot9) {
  colores = 3;
 }
  
  if (mouseX > posXbot10 && mouseX < posXbot10 + tambot10 &&
  mouseY > posYbot10 && mouseY < posYbot10 + tambot10) {
  colores = 4;
 }
  
  if (mouseX > posXbot11 && mouseX < posXbot11 + tambot11 &&
  mouseY > posYbot11 && mouseY < posYbot11 + tambot11) {
  colores = 5;
 }
  
   if (mouseX > posXbot12 && mouseX < posXbot12 + tambot12 &&
  mouseY > posYbot12 && mouseY < posYbot12 + tambot12) {
  colores = 6;
 }
     if (mouseX > posXbot13 && mouseX < posXbot13 + tambot13 &&
  mouseY > posYbot13 && mouseY < posYbot13 + tambot13) {
  colores = 7;
 }
  
      if (mouseX > posXbot14 && mouseX < posXbot14 + tambot14 &&
  mouseY > posYbot14 && mouseY < posYbot14 + tambot14) {
  colores = 8;
 }
  
       if (mouseX > posXbot15 && mouseX < posXbot15 + tambot15 &&
  mouseY > posYbot15 && mouseY < posYbot15 + tambot15) {
  colores = 9;
 }
  
        if (mouseX > posXbot16 && mouseX < posXbot16 + tambot16 &&
  mouseY > posYbot16 && mouseY < posYbot16 + tambot16) {
  colores = 10;
 }
}
}