var snowflakes = []; // array to hold snowflake objects

function setup() {
createCanvas(400, 400);
fill(250);
noStroke();
}

function draw() {


background(102, 204, 255);
var t = frameCount / 60; // update time

// create a random number of snowflakes each frame
for (var i = 0; i < random(2); i++) {
 snowflakes.push(new snowflake()); // append snowflake object
}

// loop through snowflakes with a for..of loop
for (var flake of snowflakes) {
 flake.update(t); // update snowflake position
 flake.display(); // draw snowflake
}
}

// snowflake class
function snowflake() {
// initialize coordinates
this.posX = 0;
this.posY = random(-20, 0);
this.initialangle = random(0, 2 * PI);
this.size = random(2, 1);

// radius of snowflake spiral
// chosen so the snowflakes are uniformly spread out in area
this.radius = sqrt(random(pow(width / 2, 2)));

this.update = function(time) {
 // x position follows a circle
 var w = 0.001; // angular speed
 var angle = w * time + this.initialangle;
 this.posX = width / 2 + this.radius * sin(angle);

 // different size snowflakes fall at slightly different y speeds
 this.posY += pow(this.size, 0.5);

 // delete snowflake if past end of screen
 if (this.posY > height) {
  var index = snowflakes.indexOf(this);
  snowflakes.splice(index, 1);
 }
};

this.display = function() {
 fill(255, 255, 255);
 rect(this.posX, this.posY, this.size, this.size);
};


miHora = hour();
miMinuto = minute();
miSegundo = second();


if (miHora > 6 && miHora < 18) {
 fill(102, 204, 255)
}
else {
 fill(0, 0, 0)
}
rect(0, 0, 400, 400);

fill(17, 137, 250);
rect(250,0,10,60);
fill(17, 137, 250);
ellipse(255,60,60,30);

if (miMinuto > 1 && miMinuto < 10) {
 fill(252, 195,4)
}
else {
 fill(0,0,0)
}
ellipse(255,70,30,10);

if (miMinuto > 1 && miMinuto < 10) {
 fill(252, 195,4)
}
else {
 fill(0,0,0)
 }
triangle(220,400,255,70,400,400);


fill(204, 204, 204);
rect(190, 0, 20, 400);
fill(0, 0, 0);
rect(192, 200, 5, 20);
fill(0, 0, 0);
rect(203, 200, 5, 20);
fill(204, 204, 204);
rect(0, 133, 400, 20);
fill(204, 204, 204);
rect(0, 266, 400, 20);
fill(204, 204, 204);
rect(0, 0, 400, 20);
fill(204, 204, 204);
rect(0, 20, 20, 400);
fill(204, 204, 204);
rect(380, 0, 20, 400);
fill(204, 204, 204);
rect(0, 360, 400, 100);
fill(153, 102, 51);
triangle(0, 400, 45, 180, 20, 0);
fill(204, 153, 51);
triangle(0, 400, 45, 180, 100, 80);
fill(102, 51, 0);
triangle(0, 400, 69, 180, 60, 400);
fill(153, 102, 0);
triangle(100, 80, 65, 180, 140, 20);
noStroke();
var x1 = 0
//ellipse(1000, 189 + y2, 150, 60);
// if (x1 > 820|| x1 < 0) {
//miNuevoSegundo = miNuevosegundo +40
//}
//if (miNuevoSegundo <= 1525) {

//}
//if (y1 <= 800) {
//y1= y1+2; 
//}
//if (x1 >= 1500|| x1 < 0) {
//y2 = y2 +45
//}
//}

//rect(0,0,width,20);
fill(153, 204, 51);
ellipse(10,10,20,25);
ellipse(20,10,20,25);
ellipse(40,10,20,25);
ellipse(60,10,20,25);
ellipse(80,10,20,25);
ellipse(100,10,20,25);
ellipse(120,10,20,25);
ellipse(140,10,20,25);
ellipse(160,10,20,25);
ellipse(180,10,20,25);
ellipse(200,10,20,25);
ellipse(15,30,20,25);
ellipse(35,30,20,25);
ellipse(55,30,20,25);
ellipse(75,30,20,25);
ellipse(95,30,20,25);
ellipse(115,30,20,25);
ellipse(135,30,20,25);
ellipse(155,30,20,25);
ellipse(175,30,20,25);
ellipse(195,30,20,25);
ellipse(10,50,20,25);
ellipse(20,50,20,25);
ellipse(40,50,20,25);
ellipse(60,50,20,25);
ellipse(80,50,20,25);
ellipse(100,50,20,25);
ellipse(120,50,20,25);
ellipse(140,50,20,25);
ellipse(160,50,20,25);
ellipse(180,50,20,25);
ellipse(15,70,20,25);
ellipse(35,70,20,25);
ellipse(55,70,20,25);
ellipse(75,70,20,25);
ellipse(95,70,20,25);
ellipse(115,70,20,25);
ellipse(135,70,20,25);
ellipse(155,70,20,25);
ellipse(175,70,20,25);


var miNuevoMinuto = map(miMinuto, 0, 60, 0, width);
var miNuevoSegundo = map(miSegundo, 0, 60, 0, width);
//rect(0,0,width,20);





//if (y1 <
//for (var i=0; i< miNuevoSegundo; i++){

//if (miNuevoMinuto = 53) {
 //ellipse(20, miNuevoSegundo+1, 20, 25)
//}

//else {
// ellipse(20, 0, 20, 25)}
if(miNuevoMinuto >2 ){
ellipse(20,miNuevoSegundo+10,20,25)
} 

if(miNuevoMinuto >2 ){
ellipse(60,miNuevoSegundo+60,20,25)
}

if(miNuevoMinuto >2 ){
ellipse(90,miNuevoSegundo+20,20,25)
  
noStroke();
var miNuevoMinuto = map(miMinuto,0,60,0,width);
fill(random (255), random(255),random(255));
ellipse(miNuevoMinuto,180,10,5);
ellipse(miNuevoMinuto+10,180,10,5); 
  
ellipse(miNuevoMinuto+20,200,10,5);
ellipse(miNuevoMinuto+30,200,10,5); 
  
ellipse(miNuevoMinuto+40,170,10,5);
ellipse(miNuevoMinuto+50,170,10,5);
  
ellipse(miNuevoMinuto+60,190,10,5);
ellipse(miNuevoMinuto+70,190,10,5);
} 

}








