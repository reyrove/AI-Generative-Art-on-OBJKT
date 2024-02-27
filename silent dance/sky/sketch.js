let startX;
let startY;
let endX;
let endY;

let deltaStartX;
let deltaStartY;
let deltaEndX;
let deltaEndY;

let r;
let g;
let b;

function setup() {
  createCanvas(600, 600);

  startX = random(width);
  startY = random(height);
  endX = random(width);
  endY = random(height);

  const range = 5;
  deltaStartX = random(-range/2, range);
  deltaStartY = random(-range, range/2);
  deltaEndX = random(-range, range);
  deltaEndY = random(-range/4, range);

  r = random(255);
  g = random(255);
  b = random(255);

  noFill();
  background(177, 216, 240);
}

function draw() {

  stroke(r, g, b);
  
  circle(300, 300, startX/1.5);
 
  r += random(-5, 5);
  g += random(-5, 5);
  b += random(-5, 5);

  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  startX += deltaStartX;
  startY += deltaStartY;
  endX += deltaEndX;
  endY += deltaEndY;

  if(startX < 0 || startX > width){
    deltaStartX *= -2;
  }

  if(startY < 0 || startY > height){
    deltaStartY *= -3;
  }

  if(endX < 0 || endX > width){
    deltaEndX *= -1;
  }

  if(endY < 0 || endY > height){
    deltaEndY *= -1;
  }
}

