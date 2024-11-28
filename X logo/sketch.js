function setup() {
  createCanvas(300, 300, WEBGL);
  frameRate(36)
  angleMode(DEGREES)
}

function draw() {
  background(0);
  
  rotateY(frameCount * 5);
  beginShape();
  fill(0)
  stroke(255)
  strokeWeight(10)
  vertex(-50, 60, 0);
  vertex(-20, 60, 0);
  vertex(50, -60, 0);
  vertex(20, -60, 0);
  endShape(CLOSE);

  beginShape();
  stroke(255)
  strokeWeight(10)
  vertex(50, 60, 0);
  vertex(49, 60, 0);
  vertex(9, 10, 0);
  vertex(10, 10, 0);
  endShape(CLOSE);

  beginShape();
  stroke(255)
  strokeWeight(10)
  vertex(-50, -60, 0);
  vertex(-49, -60, 0);
  vertex(-9, -10, 0);
  vertex(-10, -10, 0);
  endShape(CLOSE);
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 2);
  }
}