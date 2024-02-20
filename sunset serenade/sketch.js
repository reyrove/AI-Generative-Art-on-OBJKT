let rez = 0.02;
let t = 0;
let yoff = 0.0;

function setup() {
  createCanvas(600,600);
  frameRate(30);


}

function draw() {
  background(214, 180, 203);
  space = 9;
  size = 30;

  beginShape()
  drawingContext.shadowBlur = 0;
  for (i = 0; i < width; i += space) {
    for (j = 0; j < height; j += space) {
      n = noise(i * rez, j * rez, t);
      stroke(54, 3, 40);
      
      if (n < 0.5) {
        line(i, j, i + size, j + size);
      } else {
        line(i + size, j, i, j + size/2);
      }
    }
    t += 0.00002;
  }
  endShape(CLOSE)

beginShape()
  fill(196, 43, 12);
  stroke(196, 43, 12);
  drawingContext.shadowBlur = 90;
  drawingContext.shadowColor = color(196, 43, 12);
  circle(300,100,93);
endShape(CLOSE)
  
  fill(22,10,71);
    beginShape();
    drawingContext.shadowBlur = 5;
    drawingContext.shadowColor = color(22,10,71);
    let xoff = 0; 
    for (let x = 0; x <= width; x += 10) {
      let y = map(noise(xoff, yoff), 0, 1, 350, 400);
      vertex(x, y);
      xoff += 0.1;
    }
  
    yoff += 0.1;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

}


function keyPressed() {
  if (key === 's') {
    saveGif('sunset serenade', 20);
  }
}