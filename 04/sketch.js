var x1 = 0
var y1 = 0
var x2 = 0
var y2 = 0
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
  line(150 + x1, 400 + y1, 700 + x2, 500 + y2);
  x1 = x1 + 2;
  if (x1 > 825) {
    x1 = 825;
  }
  x2 = x2 + 2;
  if (x2 > 825) {
    x2 = 825;
  }

  if (x1 > 1100 || x1 < 0) {
    y1 = y1 + 1
  }
  if (x2 > 810 || x2 < 0) {
    y2 = y2 + 1
  }

  stroke(153, 0, 255);
  fill(153, 0, 255);
  line(150 + x1, 400 + y1, 250 + x2, 500 + y2);
  x1 = x1 + 1;
  if (x1 > 825) {
    x1 = 825;
  }
  x2 = x2 + 1;
  if (x2 > 825) {
    x2 = 825;
  }
  if (x1 > 1900 || x1 < 0) {
    y1 = y1 + 1
  }
  if (x2 > 1600 || x2 < 0) {
    y2 = y2 + 1
  }
  stroke(255, 0, 153);
  fill(255, 0, 153);
  line(250 + x1, 500 + y1, 700 + x2, 500 + y2);
  x1 = x1 + 1;
  if (x1 > 825) {
    x1 = 825;
  }
  x2 = x2 + 1;
  if (x2 > 825) {
    x2 = 825;
  }
  if (x1 > 1900 || x1 < 0) {
    y1 = y1 + 1
  }
  if (x2 > 2400 || x < 0) {
    y2 = y2 + 1
  }

  stroke(153, 0, 255);
  fill(153, 0, 255);
  line(100 + x1, 600 + y1, 700 + x2, 500 + y2);
  x1 = x1 + 1;
  if (x1 > 825) {
    x1 = 825;
  }
  x2 = x2 + 1;
  if (x2 > 825) {
    x2 = 825;
  }
  if (x1 > 1900 || x1 < 0) {
    y1 = y1 + 1
  }
  if (x2 > 4050 || x2 < 0) {
    y2 = y2 + 1
  }
  stroke(255, 0, 153);
  fill(255, 0, 153);
  line(250 + x1, 510 + y1, 700 + x2, 500 + y2);
  x1 = x1 + 1;
  if (x1 > 825) {
    x1 = 825;
  }
  x2 = x2 + 1;
  if (x2 > 825) {
    x2 = 825;
  }
  if (x1 > 1900 || x1 < 0) {
    y1 = y1 + 1
  }
  if (x2 > 4850 || x2 < 0) {
    y2 = y2 + 1
  }
  stroke(153, 0, 255);
  fill(153, 0, 255);
  line(250 + x1, 510 + y1, 100 + x2, 600 + y2);
  x1 = x1 + 1;
  if (x1 > 825) {
    x1 = 825;
  }
  x2 = x2 + 1;
  if (x2 > 825) {
    x2 = 825;
  }
  if (x1 > 1900 || x1 < 0) {
    y1 = y1 + 1
  }
  if (x2 > 5650 || x2 < 0) {
    y2 = y2 + 1
  }
  stroke(255, 0, 153);
  fill(255, 0, 153);
  line(250 + x1, 650 + y1, 700 + x2, 500 + y2);
  x1 = x1 + 1;
  if (x1 > 825) {
    x1 = 825;
  }
  x2 = x2 + 1;
  if (x2 > 825) {
    x2 = 825;
  }
  if (x1 > 1900 || x1 < 0) {
    y1 = y1 + 1
  }
  if (x2 > 6450 || x2 < 0) {
    y2 = y2 + 1
  }
  stroke(153, 0, 255);
  fill(153, 0, 255);
  line(250 + x1, 575 + y1, 250 + x2, 650 + y2);
  x1 = x1 + 1;
  if (x1 > 825) {
    x1 = 825;
  }
  x2 = x2 + 1;
  if (x2 > 825) {
    x2 = 825;
  }
  if (x1 > 1900 || x1 < 0) {
    y1 = y1 + 1
  }
  if (x2 > 7250 || x2 < 0) {
    y2 = y2 + 1
  }
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
  ellipse(1000, 189 + y1, 150, 60);
  //if (y1 <= 1525) {
  //y1= y1+1;
  //}
  stroke(0, 153, 0);
  fill(201, 247, 3);
  ellipse(950, 70 + y1, 150, 60);
  //if (y1 <= 800) {
  //y1= y1+2; 
  //}
  if (x1 > 790 || x1 < 0) {
    y1 = y1 + 1
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
  
   
   if(frameCount > 100 && frameCount<300){
  ellipse (1770,600,60,60);}
     if(frameCount > 100 && frameCount<300){
   ellipse (1840,600,60,60);}
  fill(255,153,0);
  stroke(255,153,0);
  triangle (1790,650,1810,680,1825,650);


}

  //line(300,400,150,500)
  //ellipse(x,660,450, 500)x = x+2;
  //line(x,y,850,220);