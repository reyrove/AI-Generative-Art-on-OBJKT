var art;
var img;
var colors = ['red','white','cyan'];


function setup() {
  createCanvas(600, 600, WEBGL);
  art = createGraphics(600, 600);
}


function draw() {
  background( random (colors) );
  art.background(0);
  art.push();

  art.setCenter(300, 300);

  art.noFill();
  art.stroke('#FF0060');
  art.strokeWeight(10);
  art.drawingContext.shadowBlur = 32;
  art.drawingContext.shadowColor = color('#FF0060');
  art.polarSquares(9,120,120);

  art.noFill();
  art.stroke('#F6FA70');
  art.strokeWeight(10);
  art.drawingContext.shadowBlur = 32;
  art.drawingContext.shadowColor = color('#F6FA70');
  art.polarEllipses(7,100,100,100);

  art.noFill();
  art.stroke('#00DFA2');
  art.strokeWeight(10);
  art.drawingContext.shadowBlur = 32;
  art.drawingContext.shadowColor = color('#00DFA2');
  art.polarTriangles(5,50,50);
  art.pop();
  art.push();
  frameRate(20);

  rotateZ(frameCount * 0.1);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);


  texture(art);
  box(40 + sin( frameCount / 10) * 250);
  pop();
}

function keyPressed() {
  if (key === 's') {
    saveGif('cosmic casino', 5);
  }
}
