var x1 = 0
var y1 = 0
var x2 = 0
var y2 = 0
var x3 =0
var x4=0
var y4=0
var x5=0
var x6=0
var x7=0
var x8=0
var x9=0
var x10 =0
var x11=0
var x12=0
var x13=0
var x14=0
var x15=0
var x16=0
var azul = 1
var rojo = 1
var x = 0

function setup() {
  createCanvas(2550, 1650);
  background(0, 255, 255);
  

}

function draw() {
// background(0, 255, 255);


  background(0 + 255, azul);
  azul= azul +(1);
  
  stroke(255, 0, 153);
  fill(255, 0, 153);
  line(150 + x1, 400 , 700 + x2, 500 );
  x1 = x1 + 25;
  if (x1 > 825) {
    x1 = 825;
  }
  x2 = x2 + 25;
  if (x2 > 825) {
    x2 = 825;
  }

  //if (x1 > 1100 || x1 < 0) {
   // y1 = y1 + 1
  //}
  //if (x2 > 810 || x2 < 0) {
   // y2 = y2 + 1
  //}

  stroke(153, 0, 255);
  fill(153, 0, 255);
  line(150 + x3, 400 , 250 + x4, 500 );
  x3 = x3 + 25;
  if (x3 > 825) {
    x3 = 825;
  }
  x4 = x4 + 25;
  if (x4 > 825) {
    x4 = 825;
  }
  //if (x3 > 1900 || x3 < 0) {
    //y3 = y3 + 1
  //}
  //if (x4 > 1600 || x4 < 0) {
   // y4= y4 + 1
  //}
  stroke(255, 0, 153);
  fill(255, 0, 153);
  line(250 + x5, 500 , 700 + x6, 500 );
  x5 = x5 + 25;
  if (x5 > 825) {
    x5 = 825;
  }
  x6 = x6 + 25;
  if (x6 > 825) {
    x6 = 825;
  }
  //if (x1 > 1900 || x1 < 0) {
   // y1 = y1 + 1
  //}
  //if (x2 > 2400 || x < 0) {
   // y2 = y2 + 1
  //}

  stroke(153, 0, 255);
  fill(153, 0, 255);
  line(100 + x7, 600 , 700 + x8, 500 );
  x7= x7 +25;
  if (x7 > 825) {
    x7 = 825;
  }
  x8 = x8 +25;
  if (x8 > 825) {
    x8 = 825;
  }
  //if (x1 > 1900 || x1 < 0) {
    //y1 = y1 + 1
  //}
  ////if (x2 > 4050 || x2 < 0) {
    ///y2 = y2 + 1
  //}
  stroke(255, 0, 153);
  fill(255, 0, 153);
  line(250 + x9, 510 , 700 + x10, 500 );
  x9 = x9 + 25;15;
  if (x9 > 825) {
    x9 = 825;
  }
  x10 = x10+ 25;
  if (x10 > 825) {
    x10 = 825;
  }
  //if (x1 > 1900 || x1 < 0) {
   // y1 = y1 + 1
  //}
  //if (x2 > 4850 || x2 < 0) {
    //y2 = y2 + 1
  //}
  stroke(153, 0, 255);
  fill(153, 0, 255);
  line(250 + x11, 510 , 100 + x12, 600 );
  x11 = x11 +25;
  if (x11 > 825) {
    x11= 825;
  }
  x12 = x12 +25;
  if (x12 > 825) {
    x12 = 825;
  }
  //if (x1 > 1900 || x1 < 0) {
    //y1 = y1 + 1
  //}
  //if (x2 > 5650 || x2 < 0) {
   // y2 = y2 + 1
  //}
  stroke(255, 0, 153);
  fill(255, 0, 153);
  line(250 + x13, 650 , 700 + x14, 500 );
  x13 = x13 +25;
  if (x13 > 825) {
    x13 = 825;
  }
  x14 = x14 + 25;
  if (x14 > 825) {
    x14 = 825;
  }
  //if (x1 > 1900 || x1 < 0) {
    //y1 = y1 + 1
  //}
  //if (x2 > 6450 || x2 < 0) {
    //y2 = y2 + 1
  //}
  stroke(153, 0, 255);
  fill(153, 0, 255);
  line(250 + x15, 575 , 250 + x16, 650 );
  x15 = x15 + 25;
  if (x15 > 825) {
    x15 = 825;
  }
  x16 = x16+25;
  if (x16 > 825) {
    x16= 825;
  }
  //if (x1 > 1900 || x1 < 0) {
   // y1 = y1 + 1
  //}
  //if (x2 > 7250 || x2 < 0) {
   // y2 = y2 + 1
  //}
  strokeWeight(5)
  stroke(0, 0, 0);
  fill(0, 0, 0);
  line(1525, 1650, 1525, 100);
  line(1525, 350, 1000, 90)
  line(1200, 189, 1000, 200)
  line(1525, 700,2000,700);
  strokeWeight(5);
  stroke(0, 153, 0);
  fill(201, 247, 3);
  ellipse(1000, 189 + y2, 150, 60);
  if (x1 > 820|| x1 < 0) {
  y2 = y2 +40
  }//if (y1 <= 1525) {

  //}
  stroke(0, 153, 0);
  fill(201, 247, 3);
  ellipse(950, 70 + y2, 150, 60);
  //if (y1 <= 800) {
  //y1= y1+2; 
  //}
  if (x1 >= 1500|| x1 < 0) {
  y2 = y2 +45
  }
  stroke(255,51, azul);
  azul = azul + (1);
  fill(255,255,azul);
  azul = azul + (1);
  ellipse(2300, 250, 400, 400);
  
  stroke(255, 153, azul);
  azul = azul + (1);
  fill(255,153, azul );
  azul = azul + (-3);
  ellipse(1800,620,160,160);
    fill(0,0,0);
  stroke (0,0,0)
  line (1740,600,1780,600);
  line ( 1820,600,1860,600);
  
   
   if(frameCount > 45 && frameCount<80){
  ellipse (1770,600,60,60);}
     if(frameCount > 45 && frameCount<80){
   ellipse (1840,600,60,60);}
  fill(255,0,0);
  stroke(255,0,0);
  triangle (1790,650,1810,680,1825,650)
if (frameCount < 70){
saveCanvas("miFlipbooksito_" + frameCount, 'jpg');
}
}